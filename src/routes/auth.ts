import { debug } from "console";

var express = require("express");
var db = require("../db");

var router = express.Router();

const knex = require("knex")({
  client: "pg",
  version: "8.7.3",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "parlour",
  },
});

router.post("/login", async function (req, res, next) {
  debug(req.body);
  const { profile, token, provider } = req.body;

  try {
    await knex("users").insert({
      ...profile,
      token, // maybe meant to do something else with this? investigate passport and google auth
      provider,
    });
  } catch (err) {
    throw err;
  }
  res.json({ status: 200 });
});

module.exports = router;
