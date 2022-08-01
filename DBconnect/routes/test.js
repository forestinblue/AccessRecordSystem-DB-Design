const express = require("express");
const router = express.Router();
const db_config = require("../config/db.js");
const pool = db_config.init();



router.get("/database/list", function (req, res) {
  pool.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + pool.threadId);
  });

  pool.query('SELECT * FROM user', function (error, results, fields) {
    if (error) throw error;

    res.json(results);
    console.log('The solution is: ', results[0].solution);
  });
  pool.end();

  
});

module.exports = router;