// Import
// Internal
const { validateResults } = require("../utils/handleValidator.util");
// External
const { check } = require("express-validator");

// Validations
const validatorGetItem = [
  check("id").exists().notEmpty().isMongoId(),

  (req, res, next) => {
    return validateResults(res, req, next);
  },
];

const validatorCreateItem = [
  check("username").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("fullName").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 8, max: 30 }),

  (req, res, next) => {
    return validateResults(res, req, next);
  },
];

const validatorUpdateItem = [
  check("id").exists().notEmpty().isMongoId(),

  check("username").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("fullName").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 8, max: 30 }),

  (req, res, next) => {
    return validateResults(res, req, next);
  },
];

const validatorDeleteItem = [
  check("id").exists().notEmpty().isMongoId(),

  (req, res, next) => {
    return validateResults(res, req, next);
  },
];

const validatorLogin = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 8, max: 30 }),

  (req, res, next) => {
    return validateResults(res, req, next);
  },
];

// Export
module.exports = {
  validatorGetItem,
  validatorCreateItem,
  validatorUpdateItem,
  validatorDeleteItem,
  validatorLogin,
};
