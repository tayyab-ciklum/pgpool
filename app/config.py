import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SECRET_KEY = os.getenv('SECRET_KEY') or 'super-secret-key'
    DEBUG = True
    CSRF_ENABLED = True
    CACHE_TYPE = 'simple'
    CACHE_DEFAULT_TIMEOUT = 10 * 60
    JSON_SORT_KEYS = False


class ConfigDb(Config):
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", 'sqlite:///' + os.path.join(basedir, 'PgPool.db'))
    SQLALCHEMY_TRACK_MODIFICATIONS = False

