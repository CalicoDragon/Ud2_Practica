// Import
const express = require("express");
const {
  getSondas,
  getSonda,
  createSonda,
  updateSonda,
  deleteSonda,
} = require("../controllers/Sondas.controller");

const router = express.Router();

// Routes
router.get("/", getSondas);
router.get("/:id", getSonda);
router.post("/", createSonda);
router.put("/:id", updateSonda);
router.delete("/:id", deleteSonda);

// Export
module.exports = router;
