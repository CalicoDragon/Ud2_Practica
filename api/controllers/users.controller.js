// Import
const usersModel = require("../models/users.model");

// CRUD functions
// GET ALL
const getUsers = async (req, res) => {
  try {
    const users = await usersModel.find({});

    res.send(users);
  } catch (error) {
    console.log(`[users.controller > getUsers] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// GET BY ID
const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await usersModel.findById(id);

    res.send(user);
  } catch (error) {
    console.log(`[users.controller > getUser] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// CREATE
const createUser = async (req, res) => {
  try {
    const user = await usersModel.create(req.body);

    res.send(user);
  } catch (error) {
    console.log(`[users.controller > createUser] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// UPDATE
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await usersModel.findByIdAndUpdate(id, req.body);

    if (!user) {
      res.status(404).send("User not found");
    }

    res.send(user);
  } catch (error) {
    console.log(`[users.controller > updateUser] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await usersModel.findByIdAndDelete(id);

    if (!user) {
      res.status(404).send("User not found");
    }

    res.send(user);
  } catch (error) {
    console.log(`[users.controller > deleteUser] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// Export
module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
