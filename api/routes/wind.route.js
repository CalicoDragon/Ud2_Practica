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

const authMiddleware = require("../middlewares/session.middleware");

// Consts
const router = express.Router();

// Routes
router.get("/", getWinds);
router.get("/:id", validatorGetItem, getWind);
router.post("/", authMiddleware, validatorCreateItem, createWind);
router.put("/:id", authMiddleware, validatorUpdateItem, updateWind);
router.delete("/:id", authMiddleware, validatorDeleteItem, deleteWind);

// Export
module.exports = router;
