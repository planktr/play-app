var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://charlottekam:apptesting1@playapp-bkrcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const dbName = "fruitsdb";
const colName = "fruits";

client.connect(err => {
  // perform actions on the collection object
});

var getAllFruits = function(cb) {
        client.db(dbName).collection(colName).find().toArray(cb);
    }

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/fruits', function(req, res) {
    getAllFruits(function(err, result) {
      if(result) {
        res.jsonp(result);
      }
    })

  });






module.exports = router;
