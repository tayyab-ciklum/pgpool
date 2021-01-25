from templates import app, PgPoolDb


app.config.from_object('configurations.DevelopmentConfig')
PgPoolDb.create_connection()
app.run()
