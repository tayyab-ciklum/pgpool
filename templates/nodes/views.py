from flask import Blueprint, jsonify, request
import templates.PgPoolDb as PgPoolDb

node_blueprint = Blueprint(name="node", import_name=__name__)


@node_blueprint.route('/nodes', methods=['GET', 'POST'])
def nodes():
    if request.method == 'GET':
        nodes_list = [
            dict(id=row[0], node_name=row[1], node_number=row[2])
            for row in PgPoolDb.db_connection_cursor().execute("SELECT * FROM nodes")
        ]
        if nodes_list is not None:
            return jsonify(nodes_list)

    if request.method == 'POST':
        node_name = request.form['node_name']
        node_number = request.form['node_number']

        # Insert a new node into the database and add it to the API
        PgPoolDb.insert_new_node(node_name, node_number)
        return "Node Entered Successfully"


@node_blueprint.route('/nodes/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def find_node(id):
    node = None
    if request.method == 'GET':
        PgPoolDb.db_connection_cursor().execute("SELECT FROM nodes WHERE id=?", (id,))
        rows = PgPoolDb.db_connection_cursor().execute("SELECT * FROM nodes")
        for p in PgPoolDb.db_connection_cursor().execute("SELECT * FROM nodes"):
            node = p
        if node is not None:
            return jsonify(node), 200
        else:
            return "Error occurred"
