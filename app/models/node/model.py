from app.extensions import db
from sqlalchemy import asc, desc


class Node(db.Model):
    __tablename__ = 'nodes'

    id = db.Column(db.Integer, primary_key=True)
    cluster_id = db.Column(db.Integer, db.ForeignKey('cluster.id'))
    body = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime(), nullable=False, server_default=db.func.now(), onupdate=db.func.now())

    @classmethod
    def get_by_node_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def get_all_nodes_by_cluster(cls, cluster_id, page, per_page):
        return cls.query.filter_by(cluster_id=cluster_id).order_by(desc(cls.created_at)).paginate(page, per_page)

    @classmethod
    def get_all_nodes(cls, page, per_page, order):
        if order == 'asc':
            order_logic = asc(cls.created_at)
        else:
            order_logic = desc(cls.created_at)
        return cls.query.order_by(order_logic).paginate(page=page, per_page=per_page)

    def data(self):
        return {'id': self.id, 'body': self.body, 'cluster_id': self.cluster_id}

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()