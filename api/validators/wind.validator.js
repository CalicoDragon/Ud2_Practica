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
  check("windSpeed").exists().notEmpty(),
  check("gustSpeed").exists().notEmpty(),
  check("windDirection").exists().notEmpty(),
  check("sonda").exists().notEmpty(),
  check("measurementTakenAt").isDate(),

  (req, res, next) => {
    return validateResults(res, req, next);
  },
];

const validatorUpdateItem = [
  check("id").exists().notEmpty().isMongoId(),

  check("windSpeed").exists().notEmpty(),
  check("gustSpeed").exists().notEmpty(),
  check("windDirection").exists().notEmpty(),
  check("sonda").exists().notEmpty(),
  check("measurementTakenAt").isDate(),

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
