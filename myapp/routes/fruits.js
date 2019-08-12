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
        client.db(dbName).collection(colName).find(
          {},
          {name:1}
        ).toArray(cb);
}

var getFruitByName = function(name, cb) {
      client.db(dbName)
      .collection(colName)
      .find({ name: name}).toArray(cb);
}

var getOneFruitByName = function(name,cb) {
    client.db(dbName)
    .collection(colName)
    .findOne({name: name}, cb);

}

var getFruitByNameAndColour = function(name, colour, cb) {
  client.db(dbName)
  .collection(colName)
  .findOne({name: name, colour:colour}, cb);
}


router.get('/', function(req, res) {
    getAllFruits(function(err, result) {
      if(result) {
        res.jsonp(result);
      }
    })

  });

router.get('/name/:name/all', function(req, res) {
    var name = req.params.name;
    getFruitByName(name, function(err, result) {
      if(result) {
        res.json(result);
      }
    })
  });

router.get('/name/:name', function(req, res) {
    var name = req.params.name;
    getOneFruitByName(name, function(err, result) {
      if(result) {
        res.json(result);
      }
    });
})

router.get('/name/:name/colour/:colour', function(req, res) {
  var name = req.params.name;
  var colour = req.params.colour;
  getFruitByNameAndColour(name, colour, function(err, result) {
    if(result) {
      res.json(result);
    } else {
      res.json("Could not find an entity that matched your search.")
    }
  });

})

module.exports = router;
