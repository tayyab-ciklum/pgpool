from http import HTTPStatus
from flask_restful import Resource
from flask import request
from marshmallow import ValidationError
from webargs.flaskparser import use_kwargs
from webargs import fields
from app.models import Cluster, Node
from app.schemas import ClusterSchema, NodePaginationSchema

cluster_schema = ClusterSchema()
node_pagination_schema = NodePaginationSchema()


class CreateClusterResource(Resource):

    def post(self):
        json_data = request.get_json()
        try:
            data = cluster_schema.load(data=json_data)
        except ValidationError as exc:
            return {'message': 'validation error', 'errors': exc}, HTTPStatus.BAD_REQUEST

        cluster = Cluster(**data)
        cluster.save()
        return cluster_schema.dump(cluster), HTTPStatus.CREATED


class ClusterResource(Resource):
    def get(self, id):
        cluster = Cluster.get_by_id(id)
        if cluster is None:
            return {'message': 'cluster not found'}, HTTPStatus.NOT_FOUND

        data = cluster_schema.dump(cluster)
        return data, HTTPStatus.OK


class ClusterNodeListResource(Resource):

    @use_kwargs({'page': fields.Int(missing=1), 'per_page': fields.Int(missing=4)}, location="query")
    def get(self, username, page, per_page):
        cluster = Cluster.get_by_id(id)
        if cluster is None:
            return {'message': 'cluster not found.'}, HTTPStatus.NOT_FOUND

        nodes = Node.get_all_nodes_by_cluster(cluster.id, page, per_page)
        return node_pagination_schema.dump(nodes), HTTPStatus.OK
