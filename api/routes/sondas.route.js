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

const authMiddleware = require("../middlewares/session.middleware");

// Consts
const router = express.Router();

// Routes
router.get("/", getSondas);
router.get("/:id", validatorGetItem, getSonda);
router.post("/", authMiddleware, validatorCreateItem, createSonda);
router.put("/:id", authMiddleware, validatorUpdateItem, updateSonda);
router.delete("/:id", authMiddleware, validatorDeleteItem, deleteSonda);

// Export
module.exports = router;
