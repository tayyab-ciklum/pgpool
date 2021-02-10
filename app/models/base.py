from sqlalchemy import Column, ForeignKey, Integer, String
from app.extensions import db


class BaseModel(db.Model):
    """This class manages all of the base model functions."""

    id = Column(Integer, primary_key=True)

    @staticmethod
    def commit():
        """Commit the session."""
        db.session.commit()

    def flush(self):
        """Save and flush."""
        db.session.add(self)
        db.session.flush()
        return self

    def save(self):
        """Save and commit."""
        db.session.add(self)
        db.session.commit()
        return self

    def delete(self):
        """Delete and commit."""
        db.session.delete(self)
        db.session.commit()

    @staticmethod
    def rollback():
        """RollBack."""
        db.session.rollback()
