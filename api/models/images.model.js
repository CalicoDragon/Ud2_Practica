// Import
const mongoose = require("mongoose");

const ImagesScheme = new mongoose.Schema(
  {
    location: { type: String },
    imageURL: { type: String, required: true },
    imageTakenAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

// Export
module.exports = mongoose.model("Images", ImagesScheme);
