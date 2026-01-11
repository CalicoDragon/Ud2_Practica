// Import
const express = require("express");
const {
  getHumiditys,
  getHumidity,
  createHumidity,
  updateHumidity,
  deleteHumidity,
} = require("../controllers/humidity.controller");

const {
  validatorGetItem,
  validatorCreateItem,
  validatorUpdateItem,
  validatorDeleteItem,
} = require("../validators/wind.validator");

// Consts
const router = express.Router();

// Routes
router.get("/", getHumiditys);
router.get("/:id", validatorGetItem, getHumidity);
router.post("/", validatorCreateItem, createHumidity);
router.put("/:id", validatorUpdateItem, updateHumidity);
router.delete("/:id", validatorDeleteItem, deleteHumidity);

// Export
module.exports = router;
