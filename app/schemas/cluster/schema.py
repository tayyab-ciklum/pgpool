from marshmallow import Schema, fields, validate, post_dump


class ClusterSchema(Schema):
    """This is the schema for the Contact model."""

    id = fields.Int(dump_only=True)
    pgpool_config_file = fields.String(data_key='pgPoolConfigFile', required=True)
    password_file = fields.String(data_key='pgPoolPasswordFile', required=True)
    pgpool_log_file = fields.String(data_key='pgPoolLogFile', required=True)
    pgpool_command = fields.String(data_key='pgPoolCommand', required=True)
    pcp_client_dir = fields.String(data_key='pgPoolPcpClientDirectory', required=True)
    pcp_hostname = fields.String(data_key='pgPoolPcpHostname', required=True, default='localhost')
    pcp_refresh_time = fields.Integer(data_key='pgPoolPcpRefreshTime', required=True, default=1)
    clear_query_cache = fields.Boolean(data_key='pgPoolClearQueryCache', required=True)
    demon_mode = fields.Boolean(data_key='pgPoolDemonMode', required=True)
    debug_mode = fields.Boolean(data_key='pgPoolDebugMode', required=True)
    shutdown_mode = fields.String(data_key='pgPoolShutdownMode', required=True, validate=[validate.Length(min=4, max=10)])
    language = fields.String(data_key='pgPoolLanguage', required=True)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)

    class Meta:
        ordered = True
