// Import
const mongoose = require("mongoose");

const SondasScheme = new mongoose.Schema(
  {
    sondaName: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    location: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Export
module.exports = mongoose.model("Sondas", SondasScheme);
