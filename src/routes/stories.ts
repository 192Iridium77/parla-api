var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  // res.send("respond with a resource");
  // db.query("SELECT * FROM shops ORDER BY id ASC", (error, results) => {
  //   if (error) throw error;
  //   res.status(200).json(results.rows);
  // });
});

module.exports = router;
