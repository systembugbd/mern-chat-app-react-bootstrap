const { format } = require("date-fns");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const { v4: uuid } = require("uuid");

const loggerEvents = async (message, filename) => {
  const date = format(new Date(), "yyyy-MM-dd\tHH:mm:ss");
  const logItem = `${date}\t${uuid()}\t${message}`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", filename),
      logItem
    );
  } catch (error) {
    console.log(error.message);
  }

  console.log(`Custom Logs: ${logItem}`);
};

const customLogger = (req, res, next) => {
  loggerEvents(
    `${req.method}\t${req.path}\t${req.headers.origin}\n`,
    "requestLog.log"
  );
  next();
};

module.exports = { customLogger, loggerEvents };
