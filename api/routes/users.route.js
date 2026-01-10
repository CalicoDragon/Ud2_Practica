// Import
const express = require("express");
const {
  getUsers,
  getUser,
  registerUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

const router = express.Router();

// Routes
router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", registerUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// Export
module.exports = router;
