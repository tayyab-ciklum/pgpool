# -*- encoding: utf-8 -*-
from app.config import Config, ConfigDb
# import from packages
from flask import Flask
from flask_migrate import Migrate
from flasgger import Swagger
# imports from manually created files
from app.views import home_blueprint, api_cluster, api_node
from app.extensions import db, ma
from app.caching import cache


__all__ = ['create_app', ]


def create_app():
    """
    Create a Flask app.
    """
    app = Flask(__name__, static_folder='templates/public', template_folder="templates/static")
    app.config.from_object(Config)
    app.config.from_object(ConfigDb)
    app.config['SWAGGER'] = {
        'title': 'PgPool API',
    }

    configure_hook(app)
    configure_extensions(app)
    configure_blueprints(app)
    configure_logging(app)

    return app


def configure_extensions(app: Flask):
    db.init_app(app)
    cache.init_app(app)
    Migrate(app, db)
    Swagger(app)


def configure_blueprints(app: Flask):
    """Configure blueprints in views."""

    # '/cluster'
    # '/cluster/<int:id>'
    # '/cluster/<int:id>/nodes'
    # '/nodes'
    # 'nodes/<int:id>'

    app.register_blueprint(home_blueprint)
    app.register_blueprint(api_cluster)
    app.register_blueprint(api_node)


def configure_logging(app: Flask):
    """Configure file(info) and email(error) logging."""

    if app.debug or app.testing:
        # Skip debug and test mode. Just check standard output.
        return

    import logging
    import os
    from logging.handlers import SMTPHandler

    # Set info level on logger, which might be overwritten by handers.
    # Suppress DEBUG messages.
    app.logger.setLevel(logging.INFO)

    info_log = os.path.join(app.config['LOG_FOLDER'], 'info.log')
    info_file_handler = logging.handlers.RotatingFileHandler(info_log, maxBytes=100000, backupCount=10)
    info_file_handler.setLevel(logging.INFO)
    info_file_handler.setFormatter(logging.Formatter(
        '%(asctime)s %(levelname)s: %(message)s '
        '[in %(pathname)s:%(lineno)d]')
    )
    app.logger.addHandler(info_file_handler)

    # Testing
    #app.logger.info("testing info.")
    #app.logger.warn("testing warn.")
    #app.logger.error("testing error.")


def configure_hook(app: Flask):
    @app.before_first_request
    def create_tables():
        db.create_all()

    @app.before_request
    def before_request():
        """ To do """
        pass
