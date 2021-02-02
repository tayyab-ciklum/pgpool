from marshmallow import Schema, fields, validate, post_dump
from app.schemas import ClusterSchema
from app.schemas.pagination import PaginationSchema


class NodeSchema(Schema):
    class Meta:
        ordered = True

    id = fields.Int(dump_only=True)
    body = fields.Str(required=True, validate=[validate.Length(max=500, min=1)])
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)
    cluster = fields.Nested(ClusterSchema, attribute='cluster', dump_only=True, exclude=('email',))
    # the only=['id', 'username'] results in displaying only the id and the username of the author
    # alternately we can also specify excluding the email using exclude=(email,) attribute.


class NodePaginationSchema(PaginationSchema):
    data = fields.Nested(NodeSchema, attribute='items', many=True)
