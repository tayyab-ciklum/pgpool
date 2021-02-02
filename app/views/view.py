from flask import render_template, Response, Blueprint
from marshmallow import ValidationError

from http import HTTPStatus
home_blueprint = Blueprint('home', __name__)


@home_blueprint.route('/')
def index():
    return render_template("index.html")


@home_blueprint.app_errorhandler(Exception)
def server_error(error):
    return Response(f"Oops, got an error! {error}", status=HTTPStatus.INTERNAL_SERVER_ERROR)
