// Import
const ImagesModel = require("../models/images.model");

// CRUD functions
// GET ALL
const getImages = async (req, res) => {
  try {
    const images = await ImagesModel.find({});

    res.send(images);
  } catch (error) {
    console.log(`[images.controller > getImages] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// GET BY ID
const getImage = async (req, res) => {
  try {
    const id = req.params.id;
    const image = await ImagesModel.findById(id);

    res.send(image);
  } catch (error) {
    console.log(`[images.controller > getImage] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// CREATE
const createImage = async (req, res) => {
  try {
    const image = await ImagesModel.create(req.body);

    res.send(image);
  } catch (error) {
    console.log(`[images.controller > createImage] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// UPDATE
const updateImage = async (req, res) => {
  try {
    const id = req.params.id;
    const image = await ImagesModel.findByIdAndUpdate(id, req.body);

    if (!image) {
      res.status(404).send("image not found");
    }

    res.send(image);
  } catch (error) {
    console.log(`[images.controller > updateImage] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// DELETE
const deleteImage = async (req, res) => {
  try {
    const id = req.params.id;
    const image = await ImagesModel.findByIdAndDelete(id);

    if (!image) {
      res.status(404).send("image not found");
    }

    res.send(image);
  } catch (error) {
    console.log(`[images.controller > deleteImage] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// Export
module.exports = { getImages, getImage, createImage, updateImage, deleteImage };
