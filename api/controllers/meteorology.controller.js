// Import
const MeteorologyModel = require("../models/meteorology.model");

// CRUD functions
// GET ALL
const getMeteorologys = async (req, res) => {
  try {
    const meteorologys = await MeteorologyModel.find({});

    res.send(meteorologys);
  } catch (error) {
    console.log(`[meteorologys.controller > getMeteorologys] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// GET BY ID
const getMeteorology = async (req, res) => {
  try {
    const id = req.params.id;
    const meteorology = await MeteorologyModel.findById(id);

    res.send(meteorology);
  } catch (error) {
    console.log(`[meteorologys.controller > getMeteorology] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// CREATE
const createMeteorology = async (req, res) => {
  try {
    const meteorology = await MeteorologyModel.create(req.body);

    res.send(meteorology);
  } catch (error) {
    console.log(
      `[meteorologys.controller > createMeteorology] ERROR: ${error}`
    );
    res.status(500).send({ error: "Something broke!" });
  }
};

// UPDATE
const updateMeteorology = async (req, res) => {
  try {
    const id = req.params.id;
    const meteorology = await MeteorologyModel.findByIdAndUpdate(id, req.body);

    if (!meteorology) {
      res.status(404).send("meteorology not found");
    }

    res.send(meteorology);
  } catch (error) {
    console.log(
      `[meteorologys.controller > updateMeteorology] ERROR: ${error}`
    );
    res.status(500).send({ error: "Something broke!" });
  }
};

// DELETE
const deleteMeteorology = async (req, res) => {
  try {
    const id = req.params.id;
    const meteorology = await MeteorologyModel.findByIdAndDelete(id);

    if (!meteorology) {
      res.status(404).send("meteorology not found");
    }

    res.send(meteorology);
  } catch (error) {
    console.log(
      `[meteorologys.controller > deleteMeteorology] ERROR: ${error}`
    );
    res.status(500).send({ error: "Something broke!" });
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
