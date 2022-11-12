require("dotenv").config();
const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const DBConnection = require("./config/DBConnection");

const mongoose = require("mongoose");

const app = express();
const path = require("path");
const { customLogger, loggerEvents } = require("./middleware/Logger");

const rooms = ["general", "tech", "finance", "crypto", "political", "religion"];

DBConnection();

app.use(customLogger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "public")));

const server = require("http").createServer(app);
const PORT = process.env.PORT || 3500;
app.use("/user/", require("./router/routes"));

//error handler
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "Resource you are looking for is not availabe" });
  } else {
    res.type("txt").send("404 error resource not found");
  }
});

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});
app.use(require("./middleware/errorHandler"));

//MongoDB connection once open create show message
mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

//MongoDB on error create log file in logs folder
mongoose.connection.on("error", (err) => {
  loggerEvents(`${err}`, "mongoError.log");
  console.error("Connecting to MongoDB...\n" + err);
});
