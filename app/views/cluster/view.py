from http import HTTPStatus
from flask import request
from marshmallow import ValidationError
from app.models import Cluster, Node
from app.schemas import ClusterSchema, NodePaginationSchema
from sqlalchemy.exc import IntegrityError
from flask import Blueprint, jsonify
from flasgger import swag_from

cluster_schema = ClusterSchema()
node_pagination_schema = NodePaginationSchema()

api_cluster = Blueprint('api_cluster', __name__, url_prefix="/api/v1")


@api_cluster.route('/cluster', methods=['GET'])
@api_cluster.route('/cluster/<int:id>', methods=['GET'])
@swag_from({
    'responses': {
        HTTPStatus.OK.value: {
            'description': 'PgPool Cluster Schema',
            'schema': ClusterSchema
        }
    }
})
def get_clusters(id=None):
    artist_schema = ClusterSchema()
    artists_schema = ClusterSchema(many=True)
    if id:
        artists = Cluster.query.filter_by(id=id).first_or_404()
        artists = artist_schema.dump(artists)
    else:
        artists = Cluster.query.all()
        artists = artists_schema.dump(artists)
    print(artists)
    if artists:
        return jsonify(artists), HTTPStatus.OK


@api_cluster.route('/cluster', methods=['POST'])
def add_cluster():
    json_data = request.get_json()
    try:
        data = cluster_schema.load(json_data)
    except ValidationError as error:
        return error.messages, 400
    cluster = Cluster(**data)
    try:
        cluster.save()
    except IntegrityError as error:
        return error._message(IndentationError), HTTPStatus.INTERNAL_SERVER_ERROR
    return cluster_schema.dump(cluster), HTTPStatus.CREATED


@api_cluster.route('/cluster/<int:id>', methods=['DELETE'])
def delete_cluster(id):
    cluster = Cluster.query.filter_by(id=id).first_or_404()
    if not cluster:
        return {'message': 'cluster #' + str(id) + ' not found'}, HTTPStatus.NOT_FOUND
    cluster.delete()

    return {}, HTTPStatus.NO_CONTENT
