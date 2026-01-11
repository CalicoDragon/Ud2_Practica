// Import
const express = require("express");
const {
  getImages,
  getImage,
  createImage,
  updateImage,
  deleteImage,
} = require("../controllers/images.controller");

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
router.get("/", getImages);
router.get("/:id", validatorGetItem, getImage);
router.post("/", authMiddleware, validatorCreateItem, createImage);
router.put("/:id", authMiddleware, validatorUpdateItem, updateImage);
router.delete("/:id", authMiddleware, validatorDeleteItem, deleteImage);

// Export
module.exports = router;
