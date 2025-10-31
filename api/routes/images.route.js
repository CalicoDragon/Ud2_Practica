// Import
const express = require("express");
const {
  getImages,
  getImage,
  createImage,
  updateImage,
  deleteImage,
} = require("../controllers/Images.controller");

const router = express.Router();

// Routes
router.get("/", getImages);
router.get("/:id", getImage);
router.post("/", createImage);
router.put("/:id", updateImage);
router.delete("/:id", deleteImage);

// Export
module.exports = router;
