import sqlite3

# Connect to this database
DATABASE = "./pg_pool_db.db"


def db_connection_cursor():
    db_conn = None
    try:
        db_conn = sqlite3.connect(DATABASE)
    except "ERROR while connecting to database" as err:
        print(err)
        db_conn.close()
    finally:
        if db_conn:
            db_connect = db_conn.cursor()
            return db_connect


def db_connection():
    connection = None
    try:
        connection = sqlite3.connect(DATABASE)
    except "Error connecting to db" as e:
        print(e)
        connection.close()
    finally:
        if connection:
            return connection


# if connection is successful create nodes table
def create_connection():
    try:
        db_connection_cursor()
    except "Error occurred while creating dbFile" as e:
        print(e)
        db_connection_cursor().close()
    finally:
        if db_connection_cursor():
            db_connection_cursor().execute("""CREATE TABLE IF NOT EXISTS nodes (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                                            node_name TEXT NOT NULL,
                                            node_number TEXT NOT NULL)""")
            db_connection_cursor().close()


# Inserts new node into pool database when new POST request is initiated
def insert_new_node(node_name, node_number):
    params = (node_name, node_number)
    connection = None
    try:
        connection = sqlite3.connect(DATABASE)
        if connection:
            insert_node = connection.cursor()
            insert_node.execute("INSERT INTO nodes (node_name, node_number) VALUES (?, ?)", params)
            connection.commit()
            print("Insert successful")
            connection.close()
    except "Error occurred while inserting a new node" as ev:
        print(ev)
        connection.close()


# Delete a node from database
def delete_node(id):
    try:
        db_connection_cursor()
        if db_connection_cursor():
            db_connection_cursor().execute("DELETE FROM nodes WHERE id=" + id)
            db_connection_cursor().commit()
            print("node deleted")
            db_connection_cursor().close()
    except "Error while deleting a node" as eve:
        print(eve)
        db_connection_cursor().close()
