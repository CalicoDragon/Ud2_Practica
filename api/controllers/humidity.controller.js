// Import
const HumidityModel = require("../models/humidity.model");

// CRUD functions
// GET ALL
const getHumiditys = async (req, res) => {
  try {
    const humiditys = await HumidityModel.find({});

    res.send(humiditys);
  } catch (error) {
    console.log(`[humiditys.controller > getHumiditys] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// GET BY ID
const getHumidity = async (req, res) => {
  try {
    const id = req.params.id;
    const humidity = await HumidityModel.findById(id);

    res.send(humidity);
  } catch (error) {
    console.log(`[humiditys.controller > getHumidity] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// CREATE
const createHumidity = async (req, res) => {
  try {
    const humidity = await HumidityModel.create(req.body);

    res.send(humidity);
  } catch (error) {
    console.log(`[humiditys.controller > createHumidity] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// UPDATE
const updateHumidity = async (req, res) => {
  try {
    const id = req.params.id;
    const humidity = await HumidityModel.findByIdAndUpdate(id, req.body);

    if (!humidity) {
      res.status(404).send("humidity not found");
    }

    res.send(humidity);
  } catch (error) {
    console.log(`[humiditys.controller > updateHumidity] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// DELETE
const deleteHumidity = async (req, res) => {
  try {
    const id = req.params.id;
    const humidity = await HumidityModel.findByIdAndDelete(id);

    if (!humidity) {
      res.status(404).send("humidity not found");
    }

    res.send(humidity);
  } catch (error) {
    console.log(`[humiditys.controller > deleteHumidity] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
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
