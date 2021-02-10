from app.extensions import db
from sqlalchemy import desc
from app.models.node import Node
from typing import List


class Cluster(db.Model):
    """This class manages config information for pg pool Cluster."""
    __tablename__ = 'clusters'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nodes = db.relationship("Node", lazy="dynamic", primaryjoin="Cluster.id == Node.cluster_id")

    # Sets the path to the pgpool.conf configuration file default: /usr/local/etc/pgpool.conf
    config_file = db.Column('config_file', db.String(512), nullable=False)
    password_file = db.Column('password_file', db.String(512), nullable=False)
    # pgpool logfile
    log_file = db.Column('log_file', db.String(512), nullable=False)
    pgpool_command = db.Column('pgpool_command', db.String(512), nullable=False)
    # Sets the path to the pcp.conf configuration file
    # default: /usr/local/etc/pcp.conf)
    pcp_client_dir = db.Column('pcp_client_dir', db.String(512), nullable=False)
    pcp_hostname = db.Column('pcp_hostname', db.String(80), nullable=False)
    pcp_refresh_time = db.Column('pcp_refresh_time', db.Integer, default=0, nullable=False)
    clear_query_cache = db.Column('clear_query_cache', db.Boolean, default=False, nullable=False)
    demon_mode = db.Column('demon_mode', db.Boolean, default=False, nullable=False)
    debug_mode = db.Column('debug_mode', db.Boolean, default=False, nullable=False)
    # Shutdown modes are:
    #  smart       quit after all clients have disconnected
    #  fast        quit directly, with proper shutdown
    #  immediate   quit without complete shutdown; will lead to recovery on restart
    shutdown_mode = db.Column('shutdown_mode', db.Integer, default=1, nullable=False)
    language = db.Column('language', db.Integer, default=1, nullable=False)
    is_active = db.Column(db.Boolean(), default=False)
    created_at = db.Column(db.DateTime(), nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime(), nullable=False, server_default=db.func.now(), onupdate=db.func.now())

    @classmethod
    def get_by_id(cls, _id) -> "Cluster":
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def find_all(cls) -> List["Cluster"]:
        return cls.query.all()

    def update(self, data):
        for k, v in data.items():
            setattr(self, k, v)
        return self

    def save(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete(self) -> None:
        db.session.delete(self)
        db.session.commit()

