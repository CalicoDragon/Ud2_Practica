// Import
// External
const { matchedData } = require("express-validator");
// Internal
const usersModel = require("../models/users.model");
const {
  handleHTTPResponse,
  handleHTTPError,
  UNAUTHORIZED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../utils/handleResponse.util");
const {
  hashPassword,
  comparePassword,
} = require("../utils/handlePassword.util");
const { tokenSign } = require("../utils/handleJWT.util");

// CRUD functions
// GET ALL
const getUsers = async (req, res) => {
  try {
    const users = await usersModel.find({});

    handleHTTPResponse(res, "Users found successfully", users);
  } catch (error) {
    console.log(`[users.controller > getUsers]: ${error}`);
    handleHTTPError(res, "Users could not be found", INTERNAL_SERVER_ERROR);
  }
};

// GET BY ID
const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await usersModel.findById(id);

    handleHTTPResponse(res, "User found successfully", user);
  } catch (error) {
    console.log(`[users.controller > getUser]: ${error}`);
    handleHTTPError(res, "User could not be found", INTERNAL_SERVER_ERROR);
  }
};

// CREATE
const registerUser = async (req, res) => {
  try {
    // Almacenamos el body del request temporalmente (parecido a req.body)
    body = matchedData(req);

    // Generamos la hashedPwd y la metemos en el body
    const hashedPwd = await hashPassword(body.password);
    body = { ...body, password: hashedPwd };

    // Almacenamos usuario en la base de datos
    const user = await usersModel.create(body);

    // Respondemos la HTTP evitando enviar la contraseña
    user.set("password", undefined, { strict: false });
    const resData = {
      token: await tokenSign(user),
      data: user,
    };

    handleHTTPResponse(res, "User registered successfully", resData);
  } catch (error) {
    console.log(`[users.controller > registerUser]: ${error}`);
    handleHTTPError(res, "User could not be registered", INTERNAL_SERVER_ERROR);
  }
};

const loginUser = async (req, res) => {
  try {
    // Almacenamos el body del request temporalmente (parecido a req.body)
    body = matchedData(req);

    // Buscamos por mail
    const user = await usersModel.findOne({ email: body.mail });

    // Check de si existe el usuario
    if (!user) {
      handleHTTPError(res, "User does not exist", NOT_FOUND);
      return;
    }

    // Check de si coincide la contraseña
    const check = await comparePassword(body.password, user.password);
    if (!check) {
      handleHTTPError(res, "Invalid password", UNAUTHORIZED);
    }

    // Respondemos la HTTP evitando enviar la contraseña
    user.set("password", undefined, { strict: false });
    const resData = {
      token: await tokenSign(user),
      data: user,
    };

    handleHTTPResponse(res, "Authentification Successfull", resData);
  } catch (error) {
    console.log(`[users.controller > loginUser]: ${error}`);
    handleHTTPError(res, "User could not log in", INTERNAL_SERVER_ERROR);
  }
};

// UPDATE
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await usersModel.findByIdAndUpdate(id, req.body);

    if (!user) {
      handleHTTPError(
        res,
        "User could not be updated because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "User updated successfully", user);
  } catch (error) {
    console.log(`[users.controller > updateUser]: ${error}`);
    handleHTTPError(res, "User could not be updated", INTERNAL_SERVER_ERROR);
  }
};

// DELETE
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await usersModel.findByIdAndDelete(id);

    if (!user) {
      handleHTTPError(
        res,
        "User could not be deleted because it doesn't exist",
        NOT_FOUND
      );
      return;
    }

    handleHTTPResponse(res, "User deleted successfully", user);
  } catch (error) {
    console.log(`[users.controller > deleteUser]: ${error}`);
    handleHTTPError(res, "User could not be deleted", INTERNAL_SERVER_ERROR);
  }
};

// Export
module.exports = {
  getUsers,
  getUser,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};
