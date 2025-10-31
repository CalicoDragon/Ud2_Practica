// Import
const express = require("express");
const {
  getAirs,
  getAir,
  createAir,
  updateAir,
  deleteAir,
} = require("../controllers/Air.controller");

const router = express.Router();

// Routes
router.get("/", getAirs);
router.get("/:id", getAir);
router.post("/", createAir);
router.put("/:id", updateAir);
router.delete("/:id", deleteAir);

// Export
module.exports = router;
