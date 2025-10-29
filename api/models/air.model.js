// Import
const mongoose = require("mongoose");

const AirScheme = new mongoose.Schema(
  {
    quality: { type: Number, required: true },
    ozono: { type: Number, required: true },
    smallParticles: { type: Number, required: true },
    bigParticles: { type: Number, required: true },
    NO2: { type: Number, required: true },
    CO: { type: Number, required: true },
    SO2: { type: Number, required: true },
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
module.exports = mongoose.model("Air", AirScheme);
