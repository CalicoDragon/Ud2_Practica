// Import
// Internal
const {
  handleHTTPError,
  UNAUTHORIZED,
} = require("../utils/handleResponse.util");
const { verifyToken } = require("../utils/handleJWT.util");
const usersModel = require("../models/users.model");

// Funcs
const authMiddleware = async (req, res, next) => {
  try {
    // Check de si hay token
    if (!req.headers.authorization) {
      handleHTTPError(res, "There is no token", UNAUTHORIZED);
      return;
    }

    // Nos quedamos con el token
    const token = req.headers.authorization.split(" ").pop();

    // obtener el payload
    const tokenData = verifyToken(token);
    if (!tokenData) {
      handleHTTPError(res, "There is no token");
      return;
    }

    const user = await usersModel.findById(tokenData._id);
    req.user = user;

    next();
  } catch (error) {
    console.log(`[session.middleware > authMiddleware]: ${error}`);
    handleHTTPError(res, "No session", UNAUTHORIZED);
  }
};
// Export
module.exports = authMiddleware;
