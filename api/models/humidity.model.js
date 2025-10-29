// Import
const mongoose = require("mongoose");

const HumidityScheme = new mongoose.Schema(
  {
    airHumidity: { type: Number, required: true },
    dewPoint: { type: Number, required: true },
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
module.exports = mongoose.model("Humidity", HumidityScheme);
