// Import
const express = require("express");
const {
  getAirs,
  getAir,
  createAir,
  updateAir,
  deleteAir,
} = require("../controllers/air.controller");

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
router.get("/", getAirs);
router.get("/:id", validatorGetItem, getAir);
router.post("/", authMiddleware, validatorCreateItem, createAir);
router.put("/:id", authMiddleware, validatorUpdateItem, updateAir);
router.delete("/:id", authMiddleware, validatorDeleteItem, deleteAir);

// Export
module.exports = router;
