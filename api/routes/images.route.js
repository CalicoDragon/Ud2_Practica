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

// Consts
const router = express.Router();

// Routes
router.get("/", getImages);
router.get("/:id", validatorGetItem, getImage);
router.post("/", validatorCreateItem, createImage);
router.put("/:id", validatorUpdateItem, updateImage);
router.delete("/:id", validatorDeleteItem, deleteImage);

// Export
module.exports = router;
