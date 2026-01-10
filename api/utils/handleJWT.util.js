// Import
const jwt = require("jsonwebtoken");

// Consts
const JWT_SECRET = process.env.JWT_SECRET;
const NORMAL_TOKENS_EXPIRATION = "2h";

// Funcs
const tokenSign = (user) => {
  const sign = jwt.sign(
    {
      _id: user._id,
    },
    JWT_SECRET,
    {
      expiresIn: NORMAL_TOKENS_EXPIRATION,
    }
  );
  return sign;
};

const verifyToken = (JWTToken) => {
  try {
    return jwt.verify(JWTToken, JWT_SECRET);
  } catch (error) {
    console.log(`ERROR [handleJWT.util > verifyToken]: ${error}`);
  }
};

// Export
module.exports = { tokenSign, verifyToken };
