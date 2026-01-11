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

const authMiddleware = require("../middlewares/session.middleware");

// Consts
const router = express.Router();

// Routes
router.get("/", getMeteorologys);
router.get("/:id", validatorGetItem, getMeteorology);
router.post("/", authMiddleware, validatorCreateItem, createMeteorology);
router.put("/:id", authMiddleware, validatorUpdateItem, updateMeteorology);
router.delete("/:id", authMiddleware, validatorDeleteItem, deleteMeteorology);

// Export
module.exports = router;
