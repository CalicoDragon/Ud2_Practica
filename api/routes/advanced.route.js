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

const authMiddleware = require("../middlewares/session.middleware");

// Consts
const router = express.Router();

// Routes
router.get("/", getAdvanceds);
router.get("/:id", validatorGetItem, getAdvanced);
router.post("/", authMiddleware, validatorCreateItem, createAdvanced);
router.put("/:id", authMiddleware, validatorUpdateItem, updateAdvanced);
router.delete("/:id", authMiddleware, validatorDeleteItem, deleteAdvanced);

// Export
module.exports = router;
