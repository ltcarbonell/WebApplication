
from datetime import datetime
import pymongo
from bson.objectid import ObjectId

client = pymongo.MongoClient('mongodb://test_user:testpass1@ds021671.mlab.com:21671/exams')
database = client.exams


class Entity():
    record = {
        '_id': None,
        'created_at': None,
        'updated_at': None,
        'last_updated_by': None,
    }

    def __init__(self, created_by):
        self.record.update(_id=ObjectId())
        self.record.update(created_at=datetime.now())
        self.record.update(updated_at=datetime.now())
        self.record.update(last_updated_by=created_by)
