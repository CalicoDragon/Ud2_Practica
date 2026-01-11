// Import
const express = require("express");
const {
  getPrecipitations,
  getPrecipitation,
  createPrecipitation,
  updatePrecipitation,
  deletePrecipitation,
} = require("../controllers/precipitation.controller");

const {
  validatorGetItem,
  validatorCreateItem,
  validatorUpdateItem,
  validatorDeleteItem,
} = require("../validators/wind.validator");

// Consts
const router = express.Router();

// Routes
router.get("/", getPrecipitations);
router.get("/:id", validatorGetItem, getPrecipitation);
router.post("/", validatorCreateItem, createPrecipitation);
router.put("/:id", validatorUpdateItem, updatePrecipitation);
router.delete("/:id", validatorDeleteItem, deletePrecipitation);

// Export
module.exports = router;
