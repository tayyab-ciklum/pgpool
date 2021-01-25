from flask import Flask
from templates.hello.views import hello_blueprint
from templates.nodes.views import node_blueprint


app = Flask(
	__name__,
	static_folder='./public',
	template_folder="./static"
)
api_prefix = '/api/v1/'

app.register_blueprint(hello_blueprint)
app.register_blueprint(node_blueprint, url_prefix=api_prefix)
