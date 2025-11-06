// To import the routes
// Import
const express = require("express");
const fs = require("fs");

const router = express.Router();

const removeFileExtension = (filename) => {
  return filename.split(".").shift();
};

fs.readdirSync(__dirname).filter((file) => {
  const name = removeFileExtension(file);

  if (name !== "index") {
    router.use("/" + name, require("./" + name + ".route.js"));
  }
});

// Export
module.exports = router;
