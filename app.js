// Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Consts
const app = express();

// Middleware
app.use(cors);
app.use(express.json);

const API_PORT = process.env.API_PORT || 3000;
app.listen(API_PORT, () => {
  console.log(`Server listening on ${API_PORT}...`);
});
