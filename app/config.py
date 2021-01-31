import os


class Config(object):
    """
    Configuration base, for all environments.
    """
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///application.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = "MINHACHAVESECRETA"
    PROJECT = "pgpool"
    PROJECT_ROOT = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))


class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///application.db'


class DevelopmentConfig(Config):
    DEBUG = True


class TestingConfig(Config):
    TESTING = True
