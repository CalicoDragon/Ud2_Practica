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
  check("username").exists().notEmpty(),
  check("fullName").exists().notEmpty(),
  check("email").exists().notEmpty(),
  check("password").exists().notEmpty(),

  (req, res, next) => {
    return validateResults(res, req, next);
  },
];

const validatorUpdateItem = [
  check("id").exists().notEmpty().isMongoId(),

  check("username").exists().notEmpty(),
  check("fullName").exists().notEmpty(),
  check("email").exists().notEmpty(),
  check("password").exists().notEmpty(),

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

// Export
module.exports = {
  validatorGetItem,
  validatorCreateItem,
  validatorUpdateItem,
  validatorDeleteItem,
};
