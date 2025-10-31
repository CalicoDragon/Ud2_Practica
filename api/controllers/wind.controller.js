// Import
const WindModel = require("../models/wind.model");

// CRUD functions
// GET ALL
const getWinds = async (req, res) => {
  try {
    const winds = await WindModel.find({});

    res.send(winds);
  } catch (error) {
    console.log(`[winds.controller > getWinds] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// GET BY ID
const getWind = async (req, res) => {
  try {
    const id = req.params.id;
    const wind = await WindModel.findById(id);

    res.send(wind);
  } catch (error) {
    console.log(`[winds.controller > getWind] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// CREATE
const createWind = async (req, res) => {
  try {
    const wind = await WindModel.create(req.body);

    res.send(wind);
  } catch (error) {
    console.log(`[winds.controller > createWind] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// UPDATE
const updateWind = async (req, res) => {
  try {
    const id = req.params.id;
    const wind = await WindModel.findByIdAndUpdate(id, req.body);

    if (!wind) {
      res.status(404).send("wind not found");
    }

    res.send(wind);
  } catch (error) {
    console.log(`[winds.controller > updateWind] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// DELETE
const deleteWind = async (req, res) => {
  try {
    const id = req.params.id;
    const wind = await WindModel.findByIdAndDelete(id);

    if (!wind) {
      res.status(404).send("wind not found");
    }

    res.send(wind);
  } catch (error) {
    console.log(`[winds.controller > deleteWind] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// Export
module.exports = { getWinds, getWind, createWind, updateWind, deleteWind };
