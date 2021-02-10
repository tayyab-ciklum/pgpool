from http import HTTPStatus
from flask import request
from marshmallow import ValidationError
from app.models import Cluster, Node
from app.schemas import ClusterSchema, NodePaginationSchema, NodeSchema
from sqlalchemy.exc import IntegrityError
from flask import Blueprint, jsonify
from flasgger import swag_from

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
    return node_schema.dump(node), HTTPStatus.CREATED


@api_node.route('/node/<int:id>', methods=['DELETE'])
def delete_node(id):
    node = Node.query.filter_by(id=id).first_or_404()
    if not node:
        return {'message': 'node #' + str(id) + ' not found'}, HTTPStatus.NOT_FOUND
    node.delete()

    return {}, HTTPStatus.NO_CONTENT
