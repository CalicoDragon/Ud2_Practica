// Import
// Internal
const { matchedData } = require("express-validator");
const AirModel = require("../models/air.model");
const {
  handleHTTPResponse,
  handleHTTPError,
  UNAUTHORIZED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../utils/handleResponse.util");

// CRUD functions
// GET ALL
const getAirs = async (req, res) => {
  try {
    const airs = await AirModel.find({});

    handleHTTPResponse(res, "Airs found successfully", airs);
  } catch (error) {
    console.log(`[airs.controller > getAirs]: ${error}`);
    handleHTTPError(res, "Airs could not be found", INTERNAL_SERVER_ERROR);
  }
};

// GET BY ID
const getAir = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const air = await AirModel.findById(id);

    handleHTTPResponse(res, "Air found successfully", air);
  } catch (error) {
    console.log(`[airs.controller > getAir]: ${error}`);
    handleHTTPError(res, "Air could not be found", INTERNAL_SERVER_ERROR);
  }
};

// CREATE
const createAir = async (req, res) => {
  try {
    const air = await AirModel.create(matchedData(req));

    handleHTTPResponse(res, "Air created successfully", air);
  } catch (error) {
    console.log(`[airs.controller > createAir]: ${error}`);
    handleHTTPError(res, "Air could not be created", INTERNAL_SERVER_ERROR);
  }
};

// UPDATE
const updateAir = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const air = await AirModel.findByIdAndUpdate(id, body);

    if (!air) {
      handleHTTPError(
        res,
        "Air could not be updated because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Air updated successfully", air);
  } catch (error) {
    console.log(`[airs.controller > updateAir]: ${error}`);
    handleHTTPError(res, "Air could not be updated", INTERNAL_SERVER_ERROR);
  }
};

// DELETE
const deleteAir = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const air = await AirModel.findByIdAndDelete(id);

    if (!air) {
      handleHTTPError(
        res,
        "Air could not be deleted because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Air deleted successfully", air);
  } catch (error) {
    console.log(`[airs.controller > deleteAir]: ${error}`);
    handleHTTPError(res, "Air could not be deleted", INTERNAL_SERVER_ERROR);
  }
};

// Export
module.exports = { getAirs, getAir, createAir, updateAir, deleteAir };
