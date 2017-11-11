var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  //console.log("router.get req: ", req);
  burger.selectAll(function(data) {
    var hbsObject = {
    burgers: data
    };
    console.log("router.get hbsObject: ", hbsObject);
    //console.log(data);
    res.render("index", hbsObject);
    //res.render("index",{data});
    })
  //res.render('index');
});

router.post("/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    res.redirect('/');
  });
});

router.put("/burgers/:id", function(req, res) {
  var objColVals = {devoured: true};
  var condition = 'id = ' + req.params.id;
  //var condition = 'id = ' + '2';
  burger.updateOne(objColVals, condition, function(result) {
    console.log(result);
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;