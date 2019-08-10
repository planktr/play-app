var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://charlottekam:apptesting1@playapp-bkrcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const dbName = "fruitsdb";
const colName = "fruits";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/fruits', function(req, res) {
  var value;
  client.connect(err => {
    // perform actions on the collection object

    var collection = client.db("fruitsdb").collection("fruits");
    var result = collection.find();

    result.each(function(err, item) {
      if(item != null) {
        value += item.name;
      }

    });
    client.close();
  });

    res.send(value);

})


module.exports = router;
