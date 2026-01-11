// Import
const express = require("express");
const {
  getWinds,
  getWind,
  createWind,
  updateWind,
  deleteWind,
} = require("../controllers/wind.controller");

const {
  validatorGetItem,
  validatorCreateItem,
  validatorUpdateItem,
  validatorDeleteItem,
} = require("../validators/wind.validator");

// Consts
const router = express.Router();

// Routes
router.get("/", getWinds);
router.get("/:id", validatorGetItem, getWind);
router.post("/", validatorCreateItem, createWind);
router.put("/:id", validatorUpdateItem, updateWind);
router.delete("/:id", validatorDeleteItem, deleteWind);

// Export
module.exports = router;
