// Import
const express = require("express");
const {
  getWinds,
  getWind,
  createWind,
  updateWind,
  deleteWind,
} = require("../controllers/Wind.controller");

const router = express.Router();

// Routes
router.get("/", getWinds);
router.get("/:id", getWind);
router.post("/", createWind);
router.put("/:id", updateWind);
router.delete("/:id", deleteWind);

// Export
module.exports = router;
