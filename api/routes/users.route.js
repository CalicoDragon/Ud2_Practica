// Import
const express = require("express");
const {
  getUsers,
  getUser,
  registerUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/users.controller");
const {
  validatorGetItem,
  validatorCreateItem,
  validatorUpdateItem,
  validatorDeleteItem,
  validatorLogin,
} = require("../validators/users.validator");
const authMiddleware = require("../middlewares/session.middleware");

// Consts
const router = express.Router();

// Routes
router.post("/register", validatorCreateItem, registerUser);
router.post("/login", validatorLogin, loginUser);

router.get("/", authMiddleware, getUsers);
router.get("/:id", authMiddleware, validatorGetItem, getUser);
router.put("/:id", authMiddleware, validatorUpdateItem, updateUser);
router.delete("/:id", authMiddleware, validatorDeleteItem, deleteUser);

// Export
module.exports = router;
