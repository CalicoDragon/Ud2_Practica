// Import
const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch(() => {
      console.log("Error connecting to MongoDB");
    });
};

module.exports = dbConnect;
