// Import
// Internal
const { matchedData } = require("express-validator");
const MeteorologyModel = require("../models/meteorology.model");
const {
  handleHTTPResponse,
  handleHTTPError,
  UNAUTHORIZED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../utils/handleResponse.util");

// CRUD functions
// GET ALL
const getMeteorologys = async (req, res) => {
  try {
    const meteorologys = await MeteorologyModel.find({});

    handleHTTPResponse(res, "Meteorologys found successfully", meteorologys);
  } catch (error) {
    console.log(`[meteorologys.controller > getMeteorologys]: ${error}`);
    handleHTTPError(
      res,
      "Meteorologys could not be found",
      INTERNAL_SERVER_ERROR
    );
  }
};

// GET BY ID
const getMeteorology = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const meteorology = await MeteorologyModel.findById(id);

    handleHTTPResponse(res, "Meteorology found successfully", meteorology);
  } catch (error) {
    console.log(`[meteorologys.controller > getMeteorology]: ${error}`);
    handleHTTPError(
      res,
      "Meteorology could not be found",
      INTERNAL_SERVER_ERROR
    );
  }
};

// CREATE
const createMeteorology = async (req, res) => {
  try {
    const meteorology = await MeteorologyModel.create(matchedData(req));

    handleHTTPResponse(res, "Meteorology created successfully", meteorology);
  } catch (error) {
    console.log(`[meteorologys.controller > createMeteorology]: ${error}`);
    handleHTTPError(
      res,
      "Meteorology could not be created",
      INTERNAL_SERVER_ERROR
    );
  }
};

// UPDATE
const updateMeteorology = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const meteorology = await MeteorologyModel.findByIdAndUpdate(id, body);

    if (!meteorology) {
      handleHTTPError(
        res,
        "Meteorology could not be updated because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Meteorology updated successfully", meteorology);
  } catch (error) {
    console.log(`[meteorologys.controller > updateMeteorology]: ${error}`);
    handleHTTPError(
      res,
      "Meteorology could not be updated",
      INTERNAL_SERVER_ERROR
    );
  }
};

// DELETE
const deleteMeteorology = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const meteorology = await MeteorologyModel.findByIdAndDelete(id);

    if (!meteorology) {
      handleHTTPError(
        res,
        "Meteorology could not be deleted because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Meteorology deleted successfully", meteorology);
  } catch (error) {
    console.log(`[meteorologys.controller > deleteMeteorology]: ${error}`);
    handleHTTPError(
      res,
      "Meteorology could not be deleted",
      INTERNAL_SERVER_ERROR
    );
  }
};

// Export
module.exports = {
  getMeteorologys,
  getMeteorology,
  createMeteorology,
  updateMeteorology,
  deleteMeteorology,
};
