const mongoose = require("mongoose");

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb Database is connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = DBConnection;

// const mongoose = require("mongoose");

// const DBConnection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// module.exports = DBConnection;
