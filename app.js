// Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mongooseDBConnect = require("./api/config/mongodb.config");

const morganBody = require("morgan-body");
const { IncomingWebhook } = require("@slack/webhook");
const { INTERNAL_SERVER_ERROR } = require("./api/utils/handleResponse.util");

// Consts
const API_PORT = process.env.API_PORT || 3000;
const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK;

// Webhook y Logger Stream
const webhook = new IncomingWebhook(SLACK_WEBHOOK);

const loggerStream = {
  write: (message) => {
    webhook.send({ text: message });
  },
};

// Start server
const app = express();

// Le paso la app para que intercepte y salte errores con codigo menor al server
morganBody(app, {
  noColors: true,
  skip: function (req, res) {
    return res.statusCode < INTERNAL_SERVER_ERROR;
  },
  Stream: loggerStream,
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./api/routes"));

app.listen(API_PORT, () => {
  console.log(`Server listening on ${API_PORT}...`);
  mongooseDBConnect();
});
