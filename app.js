// Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mongooseDBConnect = require("./api/config/mongodb.config");

// Consts
const API_PORT = process.env.API_PORT || 3000;

// Start server
const app = express();

// Middleware
// app.use(cors);

// Source - https://stackoverflow.com/questions/79604374/app-useexpress-json-is-not-working-in-express-version-express5-1-0-but-wo
// Posted by Sakar
// Retrieved 2025-11-06, License - CC BY-SA 4.0

app.use((req, res, next) => {
  express.json()(req, res, (err) => {
    if (!req.body) req.body = {};
    next(err);
  });
});

// Routes
app.use("/api", require("./api/routes"));

app.listen(API_PORT, () => {
  console.log(`Server listening on ${API_PORT}...`);
  mongooseDBConnect();
});
