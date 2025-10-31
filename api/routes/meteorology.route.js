// Import
const express = require("express");
const {
  getMeteorologys,
  getMeteorology,
  createMeteorology,
  updateMeteorology,
  deleteMeteorology,
} = require("../controllers/Meteorology.controller");

const router = express.Router();

// Routes
router.get("/", getMeteorologys);
router.get("/:id", getMeteorology);
router.post("/", createMeteorology);
router.put("/:id", updateMeteorology);
router.delete("/:id", deleteMeteorology);

// Export
module.exports = router;
