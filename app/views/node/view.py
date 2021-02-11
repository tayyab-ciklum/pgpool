from http import HTTPStatus
from flask import request
from marshmallow import ValidationError
from app.models import Cluster, Node
from app.schemas import ClusterSchema, NodePaginationSchema, NodeSchema
from sqlalchemy.exc import IntegrityError
from flask import Blueprint, jsonify
from flasgger import swag_from
from app.caching import cache, clear_cache

node_schema = NodeSchema()
nodes_schema = NodeSchema(many=True)
node_pagination_schema = NodePaginationSchema()

api_node = Blueprint('api_node', __name__, url_prefix="/api/v1")


@api_node.route('/node', methods=['GET'])
@api_node.route('/node/<int:id>', methods=['GET'])
@swag_from({
    'responses': {
        HTTPStatus.OK.value: {
            'description': 'PgPool Cluster Schema',
            'schema': NodeSchema
        }
    }
})
@cache.cached(timeout=60, query_string=True)
def get_nodes(id=None):
    if id:
        nodes = Node.query.filter_by(id=id).first_or_404()
        nodes = node_schema.dump(nodes)
    else:
        nodes = Node.query.all()
        nodes = nodes_schema.dump(nodes)
    if nodes:
        return jsonify(nodes), HTTPStatus.OK
    else:
        return jsonify({}), HTTPStatus.OK


@api_node.route('/node', methods=['POST'])
@swag_from({
    'responses': {
        HTTPStatus.OK.value: {
            'description': 'PgPool Cluster Schema',
            'schema': NodeSchema
        }
    }
})
def add_node():
    json_data = request.get_json()
    try:
        data = node_schema.load(json_data)
    except ValidationError as error:
        return error.messages, HTTPStatus.BAD_REQUEST
    node = Node(**data)
    try:
        node.save()
    except IntegrityError as error:
        return error._message(IndentationError), HTTPStatus.INTERNAL_SERVER_ERROR
    clear_cache('/node')
    return node_schema.dump(node), HTTPStatus.CREATED


@api_node.route('/node/<int:id>', methods=['PUT'])
@swag_from({
    'responses': {
        HTTPStatus.OK.value: {
            'description': 'PgPool Cluster Schema',
            'schema': NodeSchema
        }
    }
})
def update_node(id):
    json_data = request.get_json()
    try:
        data = node_schema.load(data=json_data, partial=True)
    except ValidationError as exc:
        return {'message': 'validation error', 'errors': exc}, HTTPStatus.BAD_REQUEST

    node = Node.query.filter_by(id=id).first_or_404()
    if node is None:
        return {'message': 'node #' + str(id) + ' not found'}, HTTPStatus.NOT_FOUND

    node.update(data)
    node.save()
    clear_cache('/node')
    return node_schema.dump(node), HTTPStatus.OK


@api_node.route('/node/<int:id>', methods=['DELETE'])
@swag_from({
    'responses': {
        HTTPStatus.OK.value: {
            'description': 'PgPool Cluster Schema',
            'schema': NodeSchema
        }
    }
})
def delete_node(id):
    node = Node.query.filter_by(id=id).first_or_404()
    if not node:
        return {'message': 'node #' + str(id) + ' not found'}, HTTPStatus.NOT_FOUND
    node.delete()
    clear_cache('/node')
    return {}, HTTPStatus.NO_CONTENT
