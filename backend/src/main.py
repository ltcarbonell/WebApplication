
from flask_cors import CORS
from flask import Flask, jsonify, request

from .entities.entity import database
from .entities.exam import Exam, ExamSchema

# creating the Flask application
app = Flask(__name__)
CORS(app)


@app.route('/exams')
def get_exams():
    # fetching from the database
    exams_collection = database['exams']
    exam_objects = []
    for exam_object in exams_collection.find():
        exam_objects.append(exam_object)

    # transforming into JSON-serializable objects
    schema = ExamSchema(many=True)
    exams = schema.dump(exam_objects)

    # serializing as JSON
    print(jsonify(exams.data))
    return jsonify(exams.data)


@app.route('/exams', methods=['POST'])
def add_exam():
    # mount exam object
    posted_exam = ExamSchema(only=('title', 'description')).load(request.get_json())

    exam = Exam(**posted_exam.data, created_by="HTTP post request")

    # persist exam
    exams_collection = database['exams']
    exams_collection.insert_one(exam.record)

    # return created exam
    new_exam = ExamSchema().dump(exam).data
    return jsonify(new_exam), 201
