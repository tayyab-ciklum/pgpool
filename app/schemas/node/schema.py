from marshmallow import Schema, fields, validate, post_dump, validates_schema
from app.schemas.pagination import PaginationSchema
import re


def is_valid_ip(ip):
    m = re.match(r"^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$", ip)
    return bool(m) and all(map(lambda n: 0 <= int(n) <= 255, m.groups()))


class NodeSchema(Schema):

    id = fields.Int(dump_only=True)
    cluster_id = fields.Integer(data_key='cluster_id', required=True)
    ip_address = fields.Str(data_key='ip_address', required=True)
    port = fields.Integer(data_key='port', required=True)
    status = fields.Str(data_key='status', required=True, validate=[validate.OneOf(["up", "down", "unknown"])])

    backend_socket_dir = fields.Str(data_key='backendSocketDir', required=True)
    backend_hostname = fields.Str(data_key='backendHostname', required=True)
    backend_port = fields.Integer(data_key='backendPort', required=True)
    backend_weight = fields.Integer(data_key='backendWeight', required=True)

    pcp_port = fields.Integer(data_key='pcpPort', required=True)
    pcp_socket_dir = fields.Str(data_key='pcpSocketDir', required=True)
    pcp_timeout = fields.Integer(data_key='pcpTimeout', required=True)

    log_dir = fields.Str(data_key='logDirectory', required=True)
    log_connection = fields.Boolean(data_key='logConnection', required=True, default=True)
    print_timestamp = fields.Boolean(data_key='printTimeStamp', required=True, default=True)
    log_hostname = fields.Boolean(data_key='logHostname', required=True, default=True)

    replication_strict = fields.Str(data_key='replicationStrict', required=True)
    replication_stop_on_mismatch = fields.Boolean(data_key='replicationStopOnMismatch', required=True, default=False)
    reset_query_list = fields.Str(data_key='resetQueryList', required=True)

    health_check_timeout = fields.Integer(data_key='healthCheckTimeout', required=True, default=200)
    health_check_period = fields.Integer(data_key='healthCheckPeriod', required=True, default=300)
    health_check_user = fields.Str(data_key='healthCheckUser', required=True)

    recovery_user = fields.Str(data_key='recoveryUser', required=True)
    recovery_password = fields.Str(data_key='recoveryPassword', required=True)
    recovery_first_stage_command = fields.Str(data_key='recoveryFirstStageCommand', required=True)
    recovery_second_stage_command = fields.Str(data_key='recoverySecondStageCommand', required=True)
    recovery_timeout = fields.Integer(data_key='recoveryTimeout', required=True, default=60)

    system_database_hostname = fields.Str(data_key='systemDatabaseHostname', equired=True)
    system_database_port = fields.Integer(data_key='systemDatabasePort', required=True, default=8080)
    system_database_name = fields.Str(data_key='systemDatabaseName', required=True)
    system_database_schema = fields.Str(data_key='systemDatabaseSchema', required=True)
    system_database_user = fields.Str(data_key='systemDatabaseUser', required=True)
    system_database_password = fields.Str(data_key='systemDatabasePassword', required=True)

    created_at = fields.DateTime(data_key='createdAt', dump_only=True)
    updated_at = fields.DateTime(data_key='updatedAt', dump_only=True)
    # the only=['id', 'username'] results in displaying only the id and the username of the author
    # alternately we can also specify excluding the email using exclude=(email,) attribute.

    class Meta:
        ordered = True
        load_only = ("cluster",)
        include_fk = True

    # @validates_schema
    # def validate_ip_address(self, data):
    #     is_valid_ip(data['ip_address'])

    # @validates_schema
    # def validate_backend_hostname(self, data):
    #     is_valid_ip(data['backend_hostname'])
    #
    # @validates_schema
    # def validate_system_database_hostname(self, data):
    #     is_valid_ip(data['system_database_hostname'])


class NodePaginationSchema(PaginationSchema):
    data = fields.Nested(NodeSchema, attribute='items', many=True)
