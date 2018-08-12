const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

require('dotenv').config(); // this loads the defined variables from .env

// Connect
const connection = (closure) => {
    return MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err, client) => {
        if (err) return console.log(err);

        var db = client.db('candidate');
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get heroes
router.get('/heroes', (req, res) => {
    connection((db) => {
        db.collection('heroes')
            .find()
            .toArray()
            .then((heroes) => {
                response.data = heroes;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get hero
router.get('/heroes/:id', (req, res) => {
    if (ObjectID.isValid(req.params.id)) {
        connection((db) => {
            db.collection('heroes')
                .findOne({ _id: ObjectID(req.params.id) })
                .then((student) => {
                    response.data = student;
                    res.json(response);
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
});

module.exports = router;
