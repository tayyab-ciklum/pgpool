from flask import request
from flask_restful import Resource
from http import HTTPStatus
from marshmallow import ValidationError
from webargs.flaskparser import use_kwargs
from webargs import fields
from app.models import Node
from app.schemas import NodePaginationSchema, NodeSchema
from app.caching import cache, clear_cache

node_schema = NodeSchema()
node_list_schema = NodeSchema(many=True)
node_pagination_schema = NodePaginationSchema()


arguments = {
    "page": fields.Int(missing=1),
    "per_page": fields.Int(missing=2),
    "order": fields.Str(missing='desc')
}


class NodeListResource(Resource):

    @use_kwargs(arguments, location="query")
    @cache.cached(timeout=60, query_string=True)
    def get(self, page, per_page, order):
        if order not in ['asc', 'desc']:
            order = 'desc'
        paginated_nodes = Node.get_all_nodes(page=page, per_page=per_page, order=order)
        return node_pagination_schema.dump(paginated_nodes), HTTPStatus.OK

    def post(self):
        json_data = request.get_json()
        try:
            data = node_schema.load(data=json_data)
        except ValidationError as exc:
            return {'message': 'validation error', 'errors': exc}, HTTPStatus.BAD_REQUEST

        node = Node(**data)
        node.save()

        return node_schema.dump(node), HTTPStatus.CREATED


class NodeResource(Resource):

    def get(self, id):
        post = Node.get_by_node_id(id=id)
        if not post:
            return {'message': 'not found'}, HTTPStatus.NOT_FOUND

        return node_schema.dump(post), HTTPStatus.OK

    def patch(self, id):
        json_data = request.get_json()
        try:
            data = node_schema.load(data=json_data, partial=('name',))
        except ValidationError as exc:
            return {'message': 'validation error', 'errors': exc}, HTTPStatus.BAD_REQUEST
        post = Node.get_by_node_id(id)
        if post is None:
            return {'message': 'Node not found'}, HTTPStatus.NOT_FOUND

        post.body = data['body'] or post.body
        post.save()
        clear_cache('/nodes')
        return node_schema.dump(post), HTTPStatus.OK

    def delete(self, id):
        post = Node.get_by_node_id(id)
        if post is None:
            return {'message': 'Not found.'}, HTTPStatus.NOT_FOUND

        post.delete()
        clear_cache('/nodes')
        return {}, HTTPStatus.NO_CONTENT
