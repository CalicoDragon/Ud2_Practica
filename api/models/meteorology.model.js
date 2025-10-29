// Import
const mongoose = require("mongoose");

const MeteorologyScheme = new mongoose.Schema(
  {
    realTemperature: { type: Number, required: true },
    windChill: { type: Number, required: true },
    clouds: { type: String, required: true },
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
module.exports = mongoose.model("Meteorology", MeteorologyScheme);
