var express = require('express');
var router = express.Router();

var exports = module.exports = {};

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://charlottekam:apptesting1@playapp-bkrcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true
});

const dbName = "fruitsdb";
const colName = "fruits";
client.connect(err => {
  // perform actions on the collection object
});


exports.getAllFruits = function(cb) {
  client.db(dbName).collection(colName).find({}, {
    _id: 0,
    name: 1,
    colour: 0
  }).toArray(cb);
}

exports.getFruitByName = function(name, cb) {
  client.db(dbName)
    .collection(colName)
    .find({
      name: name
    }).toArray(cb);
}

exports.getOneFruitByName = function(name, cb) {
  client.db(dbName)
    .collection(colName)
    .findOne({
      name: name
    }, cb);

}

exports.getFruitByNameAndColour = function(name, colour, cb) {
  client.db(dbName)
    .collection(colName)
    .findOne({
      name: name,
      colour: colour
    }, cb);
}
