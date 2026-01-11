// Import
const express = require("express");
const {
  getUsers,
  getUser,
  registerUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");
const {
  validatorGetItem,
  validatorCreateItem,
  validatorUpdateItem,
  validatorDeleteItem,
} = require("../validators/users.validator");

// Consts
const router = express.Router();

// Routes
router.get("/", getUsers);
router.get("/:id", validatorGetItem, getUser);
router.post("/", validatorCreateItem, registerUser);
router.put("/:id", validatorUpdateItem, updateUser);
router.delete("/:id", validatorDeleteItem, deleteUser);

// Export
module.exports = router;
