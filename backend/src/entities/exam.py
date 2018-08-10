
from marshmallow import Schema, fields

from .entity import Entity


class Exam(Entity):
    __collectionname__ = 'exams'

    title = ""
    description = ""

    def __init__(self, title, description, created_by):
        Entity.__init__(self, created_by)
        self.record.update(title=title)
        self.record.update(description=description)


class ExamSchema(Schema):
    _id = fields.UUID()
    title = fields.Str()
    description = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()
