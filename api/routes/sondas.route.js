// Import
const express = require("express");
const {
  getSondas,
  getSonda,
  createSonda,
  updateSonda,
  deleteSonda,
} = require("../controllers/sondas.controller");

const {
  validatorGetItem,
  validatorCreateItem,
  validatorUpdateItem,
  validatorDeleteItem,
} = require("../validators/wind.validator");

// Consts
const router = express.Router();

// Routes
router.get("/", getSondas);
router.get("/:id", validatorGetItem, getSonda);
router.post("/", validatorCreateItem, createSonda);
router.put("/:id", validatorUpdateItem, updateSonda);
router.delete("/:id", validatorDeleteItem, deleteSonda);

// Export
module.exports = router;
