// Import
const SondasModel = require("../models/sondas.model");

// CRUD functions
// GET ALL
const getSondas = async (req, res) => {
  try {
    const sondas = await SondasModel.find({});

    res.send(sondas);
  } catch (error) {
    console.log(`[sondas.controller > getSondas] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// GET BY ID
const getSonda = async (req, res) => {
  try {
    const id = req.params.id;
    const sonda = await SondasModel.findById(id);

    res.send(sonda);
  } catch (error) {
    console.log(`[sondas.controller > getSonda] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// CREATE
const createSonda = async (req, res) => {
  try {
    const sonda = await SondasModel.create(req.body);

    res.send(sonda);
  } catch (error) {
    console.log(`[sondas.controller > createSonda] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// UPDATE
const updateSonda = async (req, res) => {
  try {
    const id = req.params.id;
    const sonda = await SondasModel.findByIdAndUpdate(id, req.body);

    if (!sonda) {
      res.status(404).send("sonda not found");
    }

    res.send(sonda);
  } catch (error) {
    console.log(`[sondas.controller > updateSonda] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// DELETE
const deleteSonda = async (req, res) => {
  try {
    const id = req.params.id;
    const sonda = await SondasModel.findByIdAndDelete(id);

    if (!sonda) {
      res.status(404).send("sonda not found");
    }

    res.send(sonda);
  } catch (error) {
    console.log(`[sondas.controller > deleteSonda] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// Export
module.exports = { getSondas, getSonda, createSonda, updateSonda, deleteSonda };
