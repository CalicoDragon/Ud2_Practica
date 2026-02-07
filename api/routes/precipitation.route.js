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
} = require("../validators/precipitation.validator");

const authMiddleware = require("../middlewares/session.middleware");

// Consts
const router = express.Router();

// Routes
router.get("/", getPrecipitations);
router.get("/:id", validatorGetItem, getPrecipitation);
router.post("/", validatorCreateItem, createPrecipitation);
router.put("/:id", authMiddleware, validatorUpdateItem, updatePrecipitation);
router.delete("/:id", authMiddleware, validatorDeleteItem, deletePrecipitation);

// Export
module.exports = router;
