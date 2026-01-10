// Import
//Internal
const WindModel = require("../models/wind.model");
const {
  handleHTTPResponse,
  handleHTTPError,
  UNAUTHORIZED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../utils/handleResponse.util");

// CRUD functions
// GET ALL
const getWinds = async (req, res) => {
  try {
    const winds = await WindModel.find({});

    handleHTTPResponse(res, "Winds found successfully", winds);
  } catch (error) {
    console.log(`[winds.controller > getWinds]: ${error}`);
    handleHTTPError(res, "Winds could not be found", INTERNAL_SERVER_ERROR);
  }
};

// GET BY ID
const getWind = async (req, res) => {
  try {
    const id = req.params.id;
    const wind = await WindModel.findById(id);

    handleHTTPResponse(res, "Wind found successfully", wind);
  } catch (error) {
    console.log(`[winds.controller > getWind]: ${error}`);
    handleHTTPError(res, "Wind could not be found", INTERNAL_SERVER_ERROR);
  }
};

// CREATE
const createWind = async (req, res) => {
  try {
    const wind = await WindModel.create(req.body);

    handleHTTPResponse(res, "Wind created successfully", wind);
  } catch (error) {
    console.log(`[winds.controller > createWind]: ${error}`);
    handleHTTPError(res, "Wind could not be created", INTERNAL_SERVER_ERROR);
  }
};

// UPDATE
const updateWind = async (req, res) => {
  try {
    const id = req.params.id;
    const wind = await WindModel.findByIdAndUpdate(id, req.body);

    if (!wind) {
      handleHTTPError(
        res,
        "Wind could not be updated because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Wind updated successfully", wind);
  } catch (error) {
    console.log(`[winds.controller > updateWind]: ${error}`);
    handleHTTPError(res, "Wind could not be updated", INTERNAL_SERVER_ERROR);
  }
};

// DELETE
const deleteWind = async (req, res) => {
  try {
    const id = req.params.id;
    const wind = await WindModel.findByIdAndDelete(id);

    if (!wind) {
      handleHTTPError(
        res,
        "Wind could not be deleted because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Wind deleted successfully", wind);
  } catch (error) {
    console.log(`[winds.controller > deleteWind]: ${error}`);
    handleHTTPError(res, "Wind could not be deleted", INTERNAL_SERVER_ERROR);
  }
};

// Export
module.exports = { getWinds, getWind, createWind, updateWind, deleteWind };
