const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// Get all burgers
router.get('/', function (req, res){
    burger.all(function(data) {
        var hbarsObj = {
            burgers: data
        };
    console.log(hbarsObj);
    res.render("index", hbarsObj);
    });

});

// Add a new burger
router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"
    ], [req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
// MOVE BURGER FROM ON THE MENU TO DEVOURED
  router.put("/api/burgers/:id", function(req, res) {
    var change = "id = " + req.params.id;
  
    console.log("changes", change);
  
    burger.update(req.body, change, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// CLEAR BURGER AFTER DEVOURING

router.delete("/api/burgers/:id", function(req, res) {
  var change = "id = " + req.params.id;
  console.log("change", change);

  burger.delete(condition, function(result){
    if (result.changedRows ===0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })

})
  
  // Export routes for server.js to use.
  module.exports = router;
  
