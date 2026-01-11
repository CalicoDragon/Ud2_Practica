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
  check("imageURL").exists().notEmpty(),

  (req, res, next) => {
    return validateResults(res, req, next);
  },
];

const validatorUpdateItem = [
  check("id").exists().notEmpty().isMongoId(),

  check("imageURL").exists().notEmpty(),

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
