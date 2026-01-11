// Import
const express = require("express");
const {
  getMeteorologys,
  getMeteorology,
  createMeteorology,
  updateMeteorology,
  deleteMeteorology,
} = require("../controllers/meteorology.controller");

const {
  validatorGetItem,
  validatorCreateItem,
  validatorUpdateItem,
  validatorDeleteItem,
} = require("../validators/wind.validator");

// Consts
const router = express.Router();

// Routes
router.get("/", getMeteorologys);
router.get("/:id", validatorGetItem, getMeteorology);
router.post("/", validatorCreateItem, createMeteorology);
router.put("/:id", validatorUpdateItem, updateMeteorology);
router.delete("/:id", validatorDeleteItem, deleteMeteorology);

// Export
module.exports = router;
