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
// app.use(express.json);

// Routes
app.use("/api", require("./api/routes"));

app.listen(API_PORT, () => {
  console.log(`Server listening on ${API_PORT}...`);
  mongooseDBConnect();
});
