// Import
// Internal
const { handleHTTPError } = require("./handleResponse.util");
// External
const { validationResult } = require("express-validator");

// Funcs
const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    handleHTTPError(res, "No se han podido validar los datos de entrada");
  }
};

// Export
module.exports = { validateResults };
