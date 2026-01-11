// Import
// Internal
const { matchedData } = require("express-validator");
const advancedModel = require("../models/advanced.model");
const {
  handleHTTPResponse,
  handleHTTPError,
  UNAUTHORIZED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../utils/handleResponse.util");

// CRUD functions
// GET ALL
const getAdvanceds = async (req, res) => {
  try {
    const advanceds = await advancedModel.find({});

    handleHTTPResponse(res, "Advanceds found successfully", advanceds);
  } catch (error) {
    console.log(`[advanceds.controller > getAdvanceds]: ${error}`);
    handleHTTPError(res, "Advanceds could not be found", INTERNAL_SERVER_ERROR);
  }
};

// GET BY ID
const getAdvanced = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const advanced = await advancedModel.findById(id);

    handleHTTPResponse(res, "Advanced found successfully", advanced);
  } catch (error) {
    console.log(`[advanceds.controller > getAdvanced]: ${error}`);
    handleHTTPError(res, "Advanced could not be found", INTERNAL_SERVER_ERROR);
  }
};

// CREATE
const createAdvanced = async (req, res) => {
  try {
    const advanced = await advancedModel.create(matchedData(req));

    handleHTTPResponse(res, "Advanced created successfully", advanced);
  } catch (error) {
    console.log(`[advanceds.controller > createAdvanced]: ${error}`);
    handleHTTPError(
      res,
      "Advanced could not be created",
      INTERNAL_SERVER_ERROR
    );
  }
};

// UPDATE
const updateAdvanced = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const advanced = await advancedModel.findByIdAndUpdate(id, body);

    if (!advanced) {
      handleHTTPError(
        res,
        "Advanced could not be updated because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Advanced updated successfully", advanced);
  } catch (error) {
    console.log(`[advanceds.controller > updateAdvanced]: ${error}`);
    handleHTTPError(
      res,
      "Advanced could not be updated",
      INTERNAL_SERVER_ERROR
    );
  }
};

// DELETE
const deleteAdvanced = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const advanced = await advancedModel.findByIdAndDelete(id);

    if (!advanced) {
      handleHTTPError(
        res,
        "Advanced could not be deleted because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Advanced deleted successfully", advanced);
  } catch (error) {
    console.log(`[advanceds.controller > deleteAdvanced]: ${error}`);
    handleHTTPError(
      res,
      "Advanced could not be deleted",
      INTERNAL_SERVER_ERROR
    );
  }
};

// Export
module.exports = {
  getAdvanceds,
  getAdvanced,
  createAdvanced,
  updateAdvanced,
  deleteAdvanced,
};
