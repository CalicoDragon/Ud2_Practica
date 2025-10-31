// Import
const express = require("express");
const {
  getPrecipitations,
  getPrecipitation,
  createPrecipitation,
  updatePrecipitation,
  deletePrecipitation,
} = require("../controllers/Precipitation.controller");

const router = express.Router();

// Routes
router.get("/", getPrecipitations);
router.get("/:id", getPrecipitation);
router.post("/", createPrecipitation);
router.put("/:id", updatePrecipitation);
router.delete("/:id", deletePrecipitation);

// Export
module.exports = router;
