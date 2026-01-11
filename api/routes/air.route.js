// Import
const express = require("express");
const {
  getAirs,
  getAir,
  createAir,
  updateAir,
  deleteAir,
} = require("../controllers/air.controller");

const {
  validatorGetItem,
  validatorCreateItem,
  validatorUpdateItem,
  validatorDeleteItem,
} = require("../validators/wind.validator");

// Consts
const router = express.Router();

// Routes
router.get("/", getAirs);
router.get("/:id", validatorGetItem, getAir);
router.post("/", validatorCreateItem, createAir);
router.put("/:id", validatorUpdateItem, updateAir);
router.delete("/:id", validatorDeleteItem, deleteAir);

// Export
module.exports = router;
