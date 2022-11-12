const { loggerEvents } = require("./Logger");
const errorHandler = (err, req, res, next) => {
  loggerEvents(
    `${err.no}\t${err.code}\t${err.message}\t${req.path}\t${req.headers.origin}\t${req.method}\n`,
    "errorLog.log"
  );
  console.log(err.stack);
  const status = res.statusCode ? res.statusCode : 500;

  res.status(status).json({ message: err.message });
  next();
};
module.exports = errorHandler;
