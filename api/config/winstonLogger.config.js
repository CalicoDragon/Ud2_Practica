// Import
const { createLogger, format, transports } = require("winston");
const { MESSAGE } = require("triple-beam");
const { combine, timestamp, label } = format;

// Formats
const generalFormat = format((info) => {
  const { level, message, timestamp } = info;
  info[MESSAGE] = `LOG (${timestamp}) ${level}: ${message}`;
  return info;
});

// Logger
const appLogger = createLogger({
  format: combine(
    label({ label: "APP", message: true }),
    timestamp(),
    generalFormat(),
  ),
  transports: [new transports.Console()],
});

// Export
module.exports = {
  appLogger,
};
