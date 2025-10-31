// Import
const AirModel = require("../models/air.model");

// CRUD functions
// GET ALL
const getAirs = async (req, res) => {
  try {
    const airs = await AirModel.find({});

    res.send(airs);
  } catch (error) {
    console.log(`[airs.controller > getAirs] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// GET BY ID
const getAir = async (req, res) => {
  try {
    const id = req.params.id;
    const air = await AirModel.findById(id);

    res.send(air);
  } catch (error) {
    console.log(`[airs.controller > getAir] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// CREATE
const createAir = async (req, res) => {
  try {
    const air = await AirModel.create(req.body);

    res.send(air);
  } catch (error) {
    console.log(`[airs.controller > createAir] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// UPDATE
const updateAir = async (req, res) => {
  try {
    const id = req.params.id;
    const air = await AirModel.findByIdAndUpdate(id, req.body);

    if (!air) {
      res.status(404).send("air not found");
    }

    res.send(air);
  } catch (error) {
    console.log(`[airs.controller > updateAir] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// DELETE
const deleteAir = async (req, res) => {
  try {
    const id = req.params.id;
    const air = await AirModel.findByIdAndDelete(id);

    if (!air) {
      res.status(404).send("air not found");
    }

    res.send(air);
  } catch (error) {
    console.log(`[airs.controller > deleteAir] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// Export
module.exports = { getAirs, getAir, createAir, updateAir, deleteAir };
