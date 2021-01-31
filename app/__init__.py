# -*- encoding: utf-8 -*-
from flask import Flask, render_template
from flask_restful import Api
from .config import DevelopmentConfig
from .extensions import db

# For import *
__all__ = ['create_app']


def create_app():
    """
    Create a Flask app.
    """

    app = Flask(
        __name__,
        static_folder='templates/public',
        template_folder="templates/static"
    )
    configure_app(app, config)
    configure_hook(app)
    configure_blueprints(app)
    configure_extensions(app)
    configure_logging(app)

    return app


def configure_app(app, config=None):
    """Different ways of configurations."""
    # Configuration of application, see configuration.py, choose one and uncomment.
    app.config.from_object(DevelopmentConfig)
    # app.config.from_object(ProductionConfig)
    # app.config.from_object(TestingConfig)

    if config:
        app.config.from_object(config)


def configure_extensions(app):
    db.init_app(app)


def configure_blueprints(app):
    """Configure blueprints in views."""
    from .api import home_blueprint, errors_blueprint, ConfigResource
    app.register_blueprint(home_blueprint)
    app.register_blueprint(errors_blueprint)

    api = Api(app)

    api.add_resource(ConfigResource, '/api/configs')


def configure_logging(app):
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


def configure_hook(app):
    @app.before_first_request
    def create_tables():
        db.create_all()

    @app.before_request
    def before_request():
        pass


def configure_error_handlers(app):
    @app.errorhandler(404)
    def page_not_found(error):
        return render_template("errors/404.html"), 404


def configure_cli(app):

    @app.cli.command()
    def initdb():
        db.drop_all()
        db.create_all()
