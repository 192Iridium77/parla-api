var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ status: 200 });
  // res.render('index', { title: 'Express' });
});

module.exports = router;
