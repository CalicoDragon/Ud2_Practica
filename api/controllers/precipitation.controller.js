// Import
// External
const WebSocket = require("ws");

// Internal
const { matchedData } = require("express-validator");
const PrecipitationModel = require("../models/precipitation.model");
const {
  handleHTTPResponse,
  handleHTTPError,
  UNAUTHORIZED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../utils/handleResponse.util");

// CRUD functions
// GET ALL
const getPrecipitations = async (req, res) => {
  try {
    const precipitations = await PrecipitationModel.find({});

    handleHTTPResponse(
      res,
      "Precipitations found successfully",
      precipitations,
    );
  } catch (error) {
    console.log(`[precipitations.controller > getPrecipitations]: ${error}`);
    handleHTTPError(
      res,
      "Precipitations could not be found",
      INTERNAL_SERVER_ERROR,
    );
  }
};

// GET BY ID
const getPrecipitation = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const precipitation = await PrecipitationModel.findById(id);

    handleHTTPResponse(res, "Precipitation found successfully", precipitation);
  } catch (error) {
    console.log(`[precipitations.controller > getPrecipitation]: ${error}`);
    handleHTTPError(
      res,
      "Precipitation could not be found",
      INTERNAL_SERVER_ERROR,
    );
  }
};

// CREATE
const createPrecipitation = async (req, res) => {
  try {
    const precipitation = await PrecipitationModel.create(matchedData(req));

    handleHTTPResponse(
      res,
      "Precipitation created successfully",
      precipitation,
    );
  } catch (error) {
    console.log(`[precipitations.controller > createPrecipitation]: ${error}`);
    handleHTTPError(
      res,
      "Precipitation could not be created",
      INTERNAL_SERVER_ERROR,
    );
  }
};

// UPDATE
const updatePrecipitation = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const precipitation = await PrecipitationModel.findByIdAndUpdate(id, body);

    if (!precipitation) {
      handleHTTPError(
        res,
        "Precipitation could not be updated because it doesn't exist",
        NOT_FOUND,
      );
      return;
    }

    handleHTTPResponse(
      res,
      "Precipitation updated successfully",
      precipitation,
    );
  } catch (error) {
    console.log(`[precipitations.controller > updatePrecipitation]: ${error}`);
    handleHTTPError(
      res,
      "Precipitation could not be updated",
      INTERNAL_SERVER_ERROR,
    );
  }
};

// DELETE
const deletePrecipitation = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const precipitation = await PrecipitationModel.findByIdAndDelete(id);

    if (!precipitation) {
      handleHTTPError(
        res,
        "Precipitation could not be deleted because it doesn't exist",
        NOT_FOUND,
      );
      return;
    }

    handleHTTPResponse(
      res,
      "Precipitation deleted successfully",
      precipitation,
    );
  } catch (error) {
    console.log(`[precipitations.controller > deletePrecipitation]: ${error}`);
    handleHTTPError(
      res,
      "Precipitation could not be deleted",
      INTERNAL_SERVER_ERROR,
    );
  }
};

// Export
module.exports = {
  getPrecipitations,
  getPrecipitation,
  createPrecipitation,
  updatePrecipitation,
  deletePrecipitation,
};
