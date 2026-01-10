// Import
// Internal
const ImagesModel = require("../models/images.model");
const {
  handleHTTPResponse,
  handleHTTPError,
  UNAUTHORIZED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../utils/handleResponse.util");

// CRUD functions
// GET ALL
const getImages = async (req, res) => {
  try {
    const images = await ImagesModel.find({});

    handleHTTPResponse(res, "Images found successfully", images);
  } catch (error) {
    console.log(`[images.controller > getImages] ERROR: ${error}`);
    handleHTTPError(res, "Images could not be found", INTERNAL_SERVER_ERROR);
  }
};

// GET BY ID
const getImage = async (req, res) => {
  try {
    const id = req.params.id;
    const image = await ImagesModel.findById(id);

    handleHTTPResponse(res, "Image found successfully", image);
  } catch (error) {
    console.log(`[images.controller > getImage]: ${error}`);
    handleHTTPError(res, "Image could not be found", INTERNAL_SERVER_ERROR);
  }
};

// CREATE
const createImage = async (req, res) => {
  try {
    const image = await ImagesModel.create(req.body);

    handleHTTPResponse(res, "Image created successfully", image);
  } catch (error) {
    console.log(`[images.controller > createImage]: ${error}`);
    handleHTTPError(res, "Image could not be created", INTERNAL_SERVER_ERROR);
  }
};

// UPDATE
const updateImage = async (req, res) => {
  try {
    const id = req.params.id;
    const image = await ImagesModel.findByIdAndUpdate(id, req.body);

    if (!image) {
      handleHTTPError(
        res,
        "Image could not be updated because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Image updated successfully", image);
  } catch (error) {
    console.log(`[images.controller > updateImage]: ${error}`);
    handleHTTPError(res, "Image could not be updated", INTERNAL_SERVER_ERROR);
  }
};

// DELETE
const deleteImage = async (req, res) => {
  try {
    const id = req.params.id;
    const image = await ImagesModel.findByIdAndDelete(id);

    if (!image) {
      handleHTTPError(
        res,
        "Image could not be deleted because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "Image deleted successfully", image);
  } catch (error) {
    console.log(`[images.controller > deleteImage]: ${error}`);
    handleHTTPError(res, "Image could not be deleted", INTERNAL_SERVER_ERROR);
  }
};

// Export
module.exports = { getImages, getImage, createImage, updateImage, deleteImage };
