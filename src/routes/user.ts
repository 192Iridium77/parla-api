var express = require("express");
var router = express.Router();

import { debug } from "console";
import prisma from "../prisma";

router.get("/", function (req, res, next) {
  debug("adfsadjfsd");
  res.send("respond with a resource");
  // db.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
  //   if (error) throw error;
  //   res.status(200).json(results.rows);
  // });
});

router.get("/create", async function (req, res, next) {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });
  console.log(user);

  res.status(200).json(user);
  // db.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
  //   if (error) throw error;
  //   res.status(200).json(results.rows);
  // });
});

module.exports = router;
