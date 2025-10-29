// Import
const mongoose = require("mongoose");

const UsersScheme = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    fullName: { type: String, required: true },
    description: { type: String, default: "" },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Export
module.exports = mongoose.model("Users", UsersScheme);
