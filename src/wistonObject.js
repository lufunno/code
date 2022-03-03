const winston = require("winston");
const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({ level: "debug" }),
    new winston.transports.File({
      filename: "./logs/error.log",
    }),
  ],
});

module.exports = { logger };
