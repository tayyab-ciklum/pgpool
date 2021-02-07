from app.extensions import db
from sqlalchemy import asc, desc
from typing import List


class Node(db.Model):

    __tablename__ = 'nodes'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    cluster_id = db.Column(db.Integer, db.ForeignKey('clusters.id'), nullable=False)
    cluster = db.relationship("Cluster", )

    ip_address = db.Column('ip_address', db.String(255), nullable=False)
    port = db.Column('port', db.Integer, nullable=False, default=5432)
    status = db.Column('status', db.String(255), nullable=False)

    # Back-ends
    backend_socket_dir = db.Column('backend_socket_dir', db.String(255), nullable=False)
    backend_hostname = db.Column('backend_hostname', db.String(255), nullable=False)
    backend_port = db.Column('backend_port', db.Integer, nullable=False)
    backend_weight = db.Column('backend_weight', db.Integer, nullable=False)

    # PCP - PGPool Control Port
    pcp_port = db.Column('pcp_port', db.Integer, nullable=False)
    pcp_socket_dir = db.Column('pcp_socket_dir', db.String, nullable=False)
    pcp_timeout = db.Column('pcp_timeout', db.Integer, nullable=False)

    # Logging
    log_dir = db.Column('log_dir', db.String(255), nullable=False)
    log_connection = db.Column('log_connection', db.Boolean, default=True, nullable=False)
    print_timestamp = db.Column('print_timestamp', db.Boolean, default=True, nullable=False)
    log_hostname = db.Column('log_hostname', db.Boolean, default=True, nullable=False)

    # Replication
    replication_strict = db.Column('replication_strict', db.String(255), nullable=False)
    replication_stop_on_mismatch = db.Column('replication_stop_on_mismatch', db.Boolean, default=False, nullable=False)
    reset_query_list = db.Column('reset_query_list', db.String(255), nullable=False)

    # Health Check
    health_check_timeout = db.Column('health_check_timeout', db.Integer, nullable=False, default=200)
    health_check_period = db.Column('health_check_period', db.Integer, nullable=False, default=300)
    health_check_user = db.Column('health_check_user', db.String(255), nullable=False)

    # Online Recovery
    recovery_user = db.Column('recovery_user', db.String(255), nullable=False)
    recovery_password = db.Column('recovery_password', db.String(255), nullable=False)
    recovery_first_stage_command = db.Column('recovery_first_stage_command', db.String(255), nullable=False)
    recovery_second_stage_command = db.Column('recovery_second_stage_command', db.String(255), nullable=False)
    recovery_timeout = db.Column('recovery_timeout', db.Integer, nullable=False, default=60)

    # System Database
    system_database_hostname = db.Column('system_database_hostname', db.String(255), nullable=False)
    system_database_port = db.Column('system_database_port', db.Integer, nullable=False, default=8080)
    system_database_name = db.Column('system_database_name', db.String(255), nullable=False)
    system_database_schema = db.Column('system_database_schema', db.String(255), nullable=False)
    system_database_user = db.Column('system_database_user', db.String(255), nullable=False)
    system_database_password = db.Column('system_database_password', db.String(255), nullable=False)
    created_at = db.Column('created_at', db.DateTime(), nullable=False, server_default=db.func.now())
    updated_at = db.Column('updated_at', db.DateTime(), nullable=False, server_default=db.func.now(), onupdate=db.func.now())

    def __init__(self, cluster_id, ip_address, port, status, backend_socket_dir, backend_hostname, backend_port,
                 backend_weight, pcp_port, pcp_socket_dir, pcp_timeout, log_dir, log_connection, print_timestamp,
                 log_hostname, replication_strict, replication_stop_on_mismatch, reset_query_list, health_check_timeout,
                 health_check_period, health_check_user, recovery_user, recovery_password, recovery_first_stage_command,
                 recovery_second_stage_command, recovery_timeout, system_database_hostname, system_database_port,
                 system_database_name, system_database_schema, system_database_user, system_database_password):
        self.cluster_id = cluster_id
        self.ip_address = ip_address
        self.port = port
        self.status = status
        self.backend_socket_dir = backend_socket_dir
        self.backend_hostname = backend_hostname
        self.backend_port = backend_port
        self.backend_weight = backend_weight
        self.pcp_port = pcp_port
        self.pcp_socket_dir = pcp_socket_dir
        self.pcp_timeout = pcp_timeout
        self.log_dir = log_dir
        self.log_connection = log_connection
        self.print_timestamp = print_timestamp
        self.log_hostname = log_hostname
        self.replication_strict = replication_strict
        self.replication_stop_on_mismatch = replication_stop_on_mismatch
        self.reset_query_list = reset_query_list
        self.health_check_timeout = health_check_timeout
        self.health_check_period = health_check_period
        self.health_check_user = health_check_user
        self.recovery_user = recovery_user
        self.recovery_password = recovery_password
        self.recovery_first_stage_command = recovery_first_stage_command
        self.recovery_second_stage_command = recovery_second_stage_command
        self.recovery_timeout = recovery_timeout
        self.system_database_hostname = system_database_hostname
        self.system_database_port = system_database_port
        self.system_database_name = system_database_name
        self.system_database_schema = system_database_schema
        self.system_database_user = system_database_user
        self.system_database_password = system_database_password

    @classmethod
    def find_by_id(cls, _id) -> "Node":
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def find_all(cls) -> List["Node"]:
        return cls.query.all()

    @classmethod
    def get_by_node_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def get_all_nodes_by_cluster(cls, cluster_id, page, per_page):
        return cls.query.filter_by(cluster_id=cluster_id).order_by(desc(cls.created_at)).paginate(page, per_page)

    @classmethod
    def get_all_nodes(cls, page, per_page, order):
        if order == 'asc':
            order_logic = asc(cls.created_at)
        else:
            order_logic = desc(cls.created_at)
        return cls.query.order_by(order_logic).paginate(page=page, per_page=per_page)

    def data(self):
        return {'id': self.id, 'body': self.body, 'cluster_id': self.cluster_id}

    def save(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete(self) -> None:
        db.session.delete(self)
        db.session.commit()
