// Import
const advancedModel = require("../models/advanced.model");

// CRUD functions
// GET ALL
const getAdvanceds = async (req, res) => {
  try {
    const advanceds = await advancedModel.find({});

    res.send(advanceds);
  } catch (error) {
    console.log(`[advanceds.controller > getAdvanceds] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// GET BY ID
const getAdvanced = async (req, res) => {
  try {
    const id = req.params.id;
    const advanced = await advancedModel.findById(id);

    res.send(advanced);
  } catch (error) {
    console.log(`[advanceds.controller > getAdvanced] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// CREATE
const createAdvanced = async (req, res) => {
  try {
    const advanced = await advancedModel.create(req.body);

    res.send(advanced);
  } catch (error) {
    console.log(`[advanceds.controller > createAdvanced] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// UPDATE
const updateAdvanced = async (req, res) => {
  try {
    const id = req.params.id;
    const advanced = await advancedModel.findByIdAndUpdate(id, req.body);

    if (!advanced) {
      res.status(404).send("advanced not found");
    }

    res.send(advanced);
  } catch (error) {
    console.log(`[advanceds.controller > updateAdvanced] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// DELETE
const deleteAdvanced = async (req, res) => {
  try {
    const id = req.params.id;
    const advanced = await advancedModel.findByIdAndDelete(id);

    if (!advanced) {
      res.status(404).send("advanced not found");
    }

    res.send(advanced);
  } catch (error) {
    console.log(`[advanceds.controller > deleteAdvanced] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
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
