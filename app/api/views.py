import os
from flask import Blueprint, render_template, Response, request, jsonify

home_blueprint = Blueprint('home', __name__)


@home_blueprint.route('/')
def index():
    return render_template("index.html")


errors_blueprint = Blueprint("errors", __name__)


@errors_blueprint.app_errorhandler(Exception)
def server_error(error):
    return Response(f"Oops, got an error! {error}", status=500)