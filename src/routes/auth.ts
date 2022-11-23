import { debug } from "console";

import express from "express";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.CLIENT_ID);
var router = express.Router();

// const knex = require("knex")({
//   client: "pg",
//   version: "8.7.3",
//   connection: {
//     host: "127.0.0.1",
//     port: 5432,
//     user: "postgres",
//     password: "postgres",
//     database: "parlour",
//   },
// });

router.post("/login", async function (req, res, next) {
  debug({ body: req.body });

  const { token, provider } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // TODO https://blog.prototypr.io/how-to-build-google-login-into-a-react-app-and-node-express-api-821d049ee670

    debug(payload);

    // await knex("users").insert({
    //   token, // maybe meant to do something else with this?
    //   provider,
    // });
  } catch (err) {
    throw err;
  }
  res.json({ status: 200 });
});

module.exports = router;
