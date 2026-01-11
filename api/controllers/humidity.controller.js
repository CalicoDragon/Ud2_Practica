// Import
// Internal
const { matchedData } = require("express-validator");
const HumidityModel = require("../models/humidity.model");
const {
  handleHTTPResponse,
  handleHTTPError,
  UNAUTHORIZED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../utils/handleResponse.util");

// CRUD functions
// GET ALL
const getHumiditys = async (req, res) => {
  try {
    const humiditys = await HumidityModel.find({});

    handleHTTPResponse(res, "Humiditys found successfully", humiditys);
  } catch (error) {
    console.log(`[humiditys.controller > getHumiditys]: ${error}`);
    handleHTTPError(
      res,
      "Humiditys could not be deleted",
      INTERNAL_SERVER_ERROR
    );
  }
};

// GET BY ID
const getHumidity = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const humidity = await HumidityModel.findById(id);

    handleHTTPResponse(res, "Humidity found successfully", humidity);
  } catch (error) {
    console.log(`[humiditys.controller > getHumidity]: ${error}`);
    handleHTTPError(res, "Humidity could not be found", INTERNAL_SERVER_ERROR);
  }
};

// CREATE
const createHumidity = async (req, res) => {
  try {
    const humidity = await HumidityModel.create(matchedData(req));

    handleHTTPResponse(res, "Humidity created successfully", humidity);
  } catch (error) {
    console.log(`[humiditys.controller > createHumidity] ERROR: ${error}`);
    handleHTTPError(
      res,
      "Humidity could not be created",
      INTERNAL_SERVER_ERROR
    );
  }
};

// UPDATE
const updateHumidity = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const humidity = await HumidityModel.findByIdAndUpdate(id, body);

    if (!humidity) {
      handleHTTPError(
        res,
        "Humidity could not be updated because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Humidity updated successfully", humidity);
  } catch (error) {
    console.log(`[humiditys.controller > updateHumidity]: ${error}`);
    handleHTTPError(
      res,
      "Humidity could not be updated",
      INTERNAL_SERVER_ERROR
    );
  }
};

// DELETE
const deleteHumidity = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const humidity = await HumidityModel.findByIdAndDelete(id);

    if (!humidity) {
      handleHTTPError(
        res,
        "Humidity could not be deleted because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Humidity deleted successfully", humidity);
  } catch (error) {
    console.log(`[humiditys.controller > deleteHumidity]: ${error}`);
    handleHTTPError(
      res,
      "Humidity could not be deleted",
      INTERNAL_SERVER_ERROR
    );
  }
};

// Export
module.exports = {
  getHumiditys,
  getHumidity,
  createHumidity,
  updateHumidity,
  deleteHumidity,
};
