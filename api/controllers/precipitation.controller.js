// Import
const PrecipitationModel = require("../models/precipitation.model");

// CRUD functions
// GET ALL
const getPrecipitations = async (req, res) => {
  try {
    const precipitations = await PrecipitationModel.find({});

    res.send(precipitations);
  } catch (error) {
    console.log(
      `[precipitations.controller > getPrecipitations] ERROR: ${error}`
    );
    res.status(500).send({ error: "Something broke!" });
  }
};

// GET BY ID
const getPrecipitation = async (req, res) => {
  try {
    const id = req.params.id;
    const precipitation = await PrecipitationModel.findById(id);

    res.send(precipitation);
  } catch (error) {
    console.log(
      `[precipitations.controller > getPrecipitation] ERROR: ${error}`
    );
    res.status(500).send({ error: "Something broke!" });
  }
};

// CREATE
const createPrecipitation = async (req, res) => {
  try {
    const precipitation = await PrecipitationModel.create(req.body);

    res.send(precipitation);
  } catch (error) {
    console.log(
      `[precipitations.controller > createPrecipitation] ERROR: ${error}`
    );
    res.status(500).send({ error: "Something broke!" });
  }
};

// UPDATE
const updatePrecipitation = async (req, res) => {
  try {
    const id = req.params.id;
    const precipitation = await PrecipitationModel.findByIdAndUpdate(
      id,
      req.body
    );

    if (!precipitation) {
      res.status(404).send("precipitation not found");
    }

    res.send(precipitation);
  } catch (error) {
    console.log(
      `[precipitations.controller > updatePrecipitation] ERROR: ${error}`
    );
    res.status(500).send({ error: "Something broke!" });
  }
};

// DELETE
const deletePrecipitation = async (req, res) => {
  try {
    const id = req.params.id;
    const precipitation = await PrecipitationModel.findByIdAndDelete(id);

    if (!precipitation) {
      res.status(404).send("precipitation not found");
    }

    res.send(precipitation);
  } catch (error) {
    console.log(
      `[precipitations.controller > deletePrecipitation] ERROR: ${error}`
    );
    res.status(500).send({ error: "Something broke!" });
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
