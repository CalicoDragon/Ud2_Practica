// Import
const mongoose = require("mongoose");

const WindScheme = new mongoose.Schema(
  {
    windSpeed: { type: Number, required: true },
    gustSpeed: { type: Number, required: true },
    windDirection: { type: String, required: true },
    sonda: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sondas",
      required: true,
    },
    measurementTakenAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

// Export
module.exports = mongoose.model("Wind", WindScheme);
