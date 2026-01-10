// Import
const bcryptjs = require("bcryptjs");

// Consts
const SALT_ROUNDS = 10;

// Funcs
const hashPassword = async (password) => {
  const hash = await bcryptjs.hash(password, SALT_ROUNDS);
  return hash;
};

// Compare pwd to hash
const comparePassword = async (password, hash) => {
  const result = await bcryptjs.compare(password, hash);
  return result;
};

// Export
module.exports = { hashPassword, comparePassword };
