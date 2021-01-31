from app.extensions import db
import json


class User(db.Model):
    _tablename__ = 'users'

    id = db.Column(
        db.Integer,
        primary_key=True
    )
    user = db.Column(
        db.String(64),
        unique=True
    )
    password = db.Column(
        db.String(500)
    )
    name = db.Column(
        db.String(500)
    )
    email = db.Column(
        db.String(120),
        unique=True
    )
    content = db.Column(
        db.Text
    )
    date = db.Column(
        db.DateTime
    )

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.id

    def __repr__(self):
        return self.name


class ConfigModel(db.Model):
    __tablename__ = 'pool_config'

    id = db.Column(
        db.Integer,
        primary_key=True
    )
    conf_file = db.Column(
        db.String(512),
        nullable=False
    )
    password_file = db.Column(
        db.String(512),
        nullable=False
    )
    log_file = db.Column(
        db.String(512),
        nullable=False
    )
    command_line = db.Column(
        db.String(512),
        nullable=False
    )
    pcp_directory = db.Column(
        db.String(512),
        nullable=False
    )
    pcp_hostname = db.Column(
        db.String(80),
        nullable=False
    )
    refresh_time = db.Column(
        db.Integer,
        default=0,
        nullable=False
    )
    clear_query_cache = db.Column(
        db.Boolean,
        default=False,
        nullable=False
    )
    demon_mode = db.Column(
        db.Boolean,
        default=False,
        nullable=False
    )
    debug_mode = db.Column(
        db.Boolean,
        default=False,
        nullable=False
    )
    stop_mode = db.Column(
        db.Integer,
        default=1,
        nullable=False
    )
    language = db.Column(
        db.Integer,
        default=1,
        nullable=False
    )

    def json(self):
        return {
            'conf_file' : self.conf_file,
            'password_file' : self.password_file,
            'log_file' : self.log_file,
            'command_line' : self.command_line,
            'pcp_directory' : self.pcp_directory,
            'pcp_hostname' : self.pcp_hostname,
            'refresh_time' : self.refresh_time,
            'clear_query_cache' : self.clear_query_cache,
            'demon_mode' : self.demon_mode,
            'debug_mode' : self.debug_mode,
            'stop_mode' : self.stop_mode,
            'language' : self.language
        }

    @staticmethod
    def add_record(_conf_file, _password_file, _log_file, _command_line, _pcp_directory, _pcp_hostname, _refresh_time, _clear_query_cache, _demon_mode, _debug_mode, _stop_mode, _language):
        new_record = ConfigModel(
            conf_file=_conf_file,
            password_file=_password_file,
            log_file=_log_file,
            command_line=_command_line,
            pcp_directory=_pcp_directory,
            pcp_hostname=_pcp_hostname,
            refresh_time=_refresh_time,
            clear_query_cache=_clear_query_cache,
            demon_mode=_demon_mode,
            debug_mode=_debug_mode,
            stop_mode=_stop_mode,
            language=_language,
        )
        db.session.add(new_record)
        db.session.commit()

    @staticmethod
    def get_all_records():
        return [ConfigModel.json(pool_config) for pool_config in ConfigModel.query.all()]

    @staticmethod
    def get_record(self, _config):
        return ConfigModel.json(ConfigModel.query.all().first())

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
