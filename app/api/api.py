from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask import Response
from .models import ConfigModel
import json



class ConfigResource(Resource):
    put_args = reqparse.RequestParser()
    put_args.add_argument("conf_file", type=str, help="Pgpool configuration file", required=True)
    put_args.add_argument("password_file", type=str, help="Pgpool password file", required=True)
    put_args.add_argument("log_file", type=str, help="Pgpool log file", required=True)
    put_args.add_argument("command_line", type=str, help="Pgpool command", required=True)
    put_args.add_argument("pcp_directory", type=str, help="Pgpool PCP directory", required=True)
    put_args.add_argument("pcp_hostname", type=str, help="Pgpool PCP hostname", required=True)
    put_args.add_argument("refresh_time", type=int, help="Pgpool refresh time", required=True)
    put_args.add_argument("clear_query_cache", type=bool, help="Clear query cache?", required=True)
    put_args.add_argument("demon_mode", type=bool, help="Demon mode", required=True)
    put_args.add_argument("debug_mode", type=bool, help="Debug mode", required=True)
    put_args.add_argument("stop_mode", type=int, help="Stop mode", required=True)
    put_args.add_argument("language", type=int, help="Language", required=True)

    resource_fields = {
        'conf_file': fields.String,
        'password_file': fields.String,
        'log_file': fields.String,
        'command_line': fields.String,
        'pcp_directory': fields.String,
        'pcp_hostname': fields.String,
        'refresh_time': fields.Integer,
        'clear_query_cache': fields.Boolean,
        'demon_mode': fields.Boolean,
        'debug_mode': fields.Boolean,
        'stop_mode': fields.Integer,
        'language': fields.Integer
    }

    def get(self):
        items = [item.json() for item in ConfigModel.query.all()]
        return items, 200

    def post(self):
        data = ConfigResource.put_args.parse_args()
        config_model = ConfigModel(**data)
        config_model.save_to_db()
        return '', 201

    def delete(self):
        ConfigModel.delete_all_data_from_db()
        return {'message':'all item is successfully deleted.'}