// Import
const mongoose = require("mongoose");

const AdvancedScheme = new mongoose.Schema(
  {
    airPressure: { type: Number, required: true },
    ultraviolet: { type: Number, required: true },
    pollen: { type: Number, required: true },
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
module.exports = mongoose.model("Advanced", AdvancedScheme);
