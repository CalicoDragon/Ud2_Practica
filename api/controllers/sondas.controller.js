// Import
// Internal
const { matchedData } = require("express-validator");
const SondasModel = require("../models/sondas.model");
const {
  handleHTTPResponse,
  handleHTTPError,
  UNAUTHORIZED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../utils/handleResponse.util");

// CRUD functions
// GET ALL
const getSondas = async (req, res) => {
  try {
    const sondas = await SondasModel.find({});

    handleHTTPResponse(res, "Sondas found successfully", sondas);
  } catch (error) {
    console.log(`[sondas.controller > getSondas]: ${error}`);
    handleHTTPError(res, "Sondas could not be found", INTERNAL_SERVER_ERROR);
  }
};

// GET BY ID
const getSonda = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const sonda = await SondasModel.findById(id);

    handleHTTPResponse(res, "Sonda found successfully", sonda);
  } catch (error) {
    console.log(`[sondas.controller > getSonda]: ${error}`);
    handleHTTPError(res, "Sonda could not be found", INTERNAL_SERVER_ERROR);
  }
};

// CREATE
const createSonda = async (req, res) => {
  try {
    const sonda = await SondasModel.create(matchedData(req));

    handleHTTPResponse(res, "Sonda created successfully", sonda);
  } catch (error) {
    console.log(`[sondas.controller > createSonda]: ${error}`);
    handleHTTPError(res, "Sonda could not be created", INTERNAL_SERVER_ERROR);
  }
};

// UPDATE
const updateSonda = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const sonda = await SondasModel.findByIdAndUpdate(id, body);

    if (!sonda) {
      handleHTTPError(
        res,
        "Sonda could not be updated because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Sonda updated successfully", sonda);
  } catch (error) {
    console.log(`[sondas.controller > updateSonda]: ${error}`);
    handleHTTPError(res, "Sonda could not be updated", INTERNAL_SERVER_ERROR);
  }
};

// DELETE
const deleteSonda = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const sonda = await SondasModel.findByIdAndDelete(id);

    if (!sonda) {
      handleHTTPError(
        res,
        "Sonda could not be deleted because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Sonda deleted successfully", sonda);
  } catch (error) {
    console.log(`[sondas.controller > deleteSonda]: ${error}`);
    handleHTTPError(res, "Sonda could not be deleted", INTERNAL_SERVER_ERROR);
  }
};

// Export
module.exports = { getSondas, getSonda, createSonda, updateSonda, deleteSonda };
