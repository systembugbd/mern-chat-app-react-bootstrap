const allowedOrigin = require("./corsOrigin");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigin.indexOf(origin) != -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by cors"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
