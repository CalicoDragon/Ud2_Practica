// Import
const mongoose = require("mongoose");

const PrecipitationScheme = new mongoose.Schema(
  {
    type: { type: String, required: true },
    probability: { type: Number, required: true },
    accomulatedPrecipitation: { type: Number, required: true },
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
module.exports = mongoose.model("Precipitation", PrecipitationScheme);
