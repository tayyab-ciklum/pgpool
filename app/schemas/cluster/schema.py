from marshmallow import Schema, fields, validate, post_dump, validates_schema, validates, ValidationError
from ..node.schema import NodeSchema


class ClusterSchema(Schema):
    """This is the schema for the Contact model."""

    id = fields.Int(dump_only=True)
    name = fields.String(data_key='name', required=True, validate=[validate.Length(min=4, max=64)])
    config_file = fields.String(data_key='configFile', required=True)
    password_file = fields.String(data_key='passwordFile', required=True)
    log_file = fields.String(data_key='logFile', required=True)
    pgpool_command = fields.String(data_key='pgPoolCommand', required=True)
    pcp_client_dir = fields.String(data_key='pcpClientDirectory', required=True)
    pcp_hostname = fields.String(data_key='pcpHostname', required=True, default='localhost')
    pcp_refresh_time = fields.Integer(data_key='pcpRefreshTime', required=True, default=1)
    clear_query_cache = fields.Boolean(data_key='clearQueryCache', required=True)
    demon_mode = fields.Boolean(data_key='demonMode', required=True)
    debug_mode = fields.Boolean(data_key='debugMode', required=True)
    shutdown_mode = fields.String(data_key='shutdownMode', required=True, validate=[validate.Length(min=4, max=10)])
    language = fields.String(data_key='language', required=True)
    created_at = fields.DateTime(data_key='createdAt', dump_only=True)
    updated_at = fields.DateTime(data_key='updatedAt', dump_only=True)
    nodes = fields.Nested(NodeSchema, attribute='nodes', dump_only=True, many=True, exlude=['cluster_id'])

    class Meta:
        ordered = True
        load_instance = True
        include_fk = True
