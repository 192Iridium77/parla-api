var express = require("express");
var router = express.Router();

import { debug } from "console";

router.get("/", function (req, res, next) {
  debug("adfsadjfsd");
  res.send("respond with a resource");
  // db.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
  //   if (error) throw error;
  //   res.status(200).json(results.rows);
  // });
});

module.exports = router;
