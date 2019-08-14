var express = require('express');
var router = express.Router();
var query = require('../query/fruits')

router.get('/', function(req, res) {
  query.getAllFruits(function(err, result) {
    if (result) {
      res.jsonp(result);
    }
  })

});

router.get('/name/:name/all', function(req, res) {
  var name = req.params.name;
  query.getFruitByName(name, function(err, result) {
    if (result) {
      res.json(result);
    }
  })
});

router.get('/name/:name', function(req, res) {
  var name = req.params.name;
  query.getOneFruitByName(name, function(err, result) {
    if (result) {
      res.json(result);
    }
  });
})

router.get('/name/:name/colour/:colour', function(req, res) {
  var name = req.params.name;
  var colour = req.params.colour;
  query.getFruitByNameAndColour(name, colour, function(err, result) {
    if (result) {
      res.json(result);
    } else {
      res.json("Could not find an entity that matched your search.")
    }
  });
})

module.exports = router;
