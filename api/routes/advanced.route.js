// Import
const express = require("express");
const {
  getAdvanceds,
  getAdvanced,
  createAdvanced,
  updateAdvanced,
  deleteAdvanced,
} = require("../controllers/advanced.controller");

const {
  validatorGetItem,
  validatorCreateItem,
  validatorUpdateItem,
  validatorDeleteItem,
} = require("../validators/wind.validator");

// Consts
const router = express.Router();

// Routes
router.get("/", getAdvanceds);
router.get("/:id", validatorGetItem, getAdvanced);
router.post("/", validatorCreateItem, createAdvanced);
router.put("/:id", validatorUpdateItem, updateAdvanced);
router.delete("/:id", validatorDeleteItem, deleteAdvanced);

// Export
module.exports = router;
