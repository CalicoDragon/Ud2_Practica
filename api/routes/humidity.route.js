// Import
const express = require("express");
const {
  getHumiditys,
  getHumidity,
  createHumidity,
  updateHumidity,
  deleteHumidity,
} = require("../controllers/Humidity.controller");

const router = express.Router();

// Routes
router.get("/", getHumiditys);
router.get("/:id", getHumidity);
router.post("/", createHumidity);
router.put("/:id", updateHumidity);
router.delete("/:id", deleteHumidity);

// Export
module.exports = router;
