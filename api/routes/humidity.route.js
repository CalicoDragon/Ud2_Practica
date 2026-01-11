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

const authMiddleware = require("../middlewares/session.middleware");

// Consts
const router = express.Router();

// Routes
router.get("/", getHumiditys);
router.get("/:id", validatorGetItem, getHumidity);
router.post("/", authMiddleware, validatorCreateItem, createHumidity);
router.put("/:id", authMiddleware, validatorUpdateItem, updateHumidity);
router.delete("/:id", authMiddleware, validatorDeleteItem, deleteHumidity);

// Export
module.exports = router;
