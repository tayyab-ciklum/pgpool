# -*- encoding: utf-8 -*-
from app.config import Config, ConfigDb
# import from packages
from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
# imports from manually created files
from .views import home_blueprint
from app.resources import CreateClusterResource, NodeListResource, NodeResource, ClusterResource, ClusterNodeListResource
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

    configure_hook(app)
    configure_extensions(app)
    configure_blueprints(app)
    configure_apis(app)
    configure_logging(app)

    return app


def configure_extensions(app: Flask):
    db.init_app(app)
    cache.init_app(app)
    Migrate(app, db)


def configure_blueprints(app: Flask):
    """Configure blueprints in views."""
    app.register_blueprint(home_blueprint)


def configure_apis(app: Flask):
    """Configure api resources."""
    api = Api(app)

    api.add_resource(CreateClusterResource, '/cluster')
    api.add_resource(ClusterResource, '/cluster/<int:id>')
    api.add_resource(ClusterNodeListResource, '/cluster/<int:id>/nodes')

    api.add_resource(NodeListResource, '/nodes')
    api.add_resource(NodeResource, '/nodes/<int:id>')


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
