// Import
const express = require("express");
const {
  getAdvanceds,
  getAdvanced,
  createAdvanced,
  updateAdvanced,
  deleteAdvanced,
} = require("../controllers/Advanced.controller");

const router = express.Router();

// Routes
router.get("/", getAdvanceds);
router.get("/:id", getAdvanced);
router.post("/", createAdvanced);
router.put("/:id", updateAdvanced);
router.delete("/:id", deleteAdvanced);

// Export
module.exports = router;
