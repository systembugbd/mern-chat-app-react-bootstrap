const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Can't leave blank"],
    },
    email: {
      type: String,
      required: [true, "Can't leave blank"],
      unique: true,
      index: true,
      validate: [isEmail, "Invalid Email"],
    },
    password: {
      type: String,
      required: [true, "Can't leave blank"],
    },
    picture: {
      type: String,
      required: [true, "Can't leave blank"],
    },
    newMessage: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: "online",
    },
  },
  { minimize: false }
);

//before save run this pre function by default on mongoose
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  //generate salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err); //if error then return to next middleware

    //generate hash password with the salt
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) return next(err); //if error then return to next middleware

      user.password = hash; //set user.password = hash password

      next(); // and go back to next middleware
    });
  });
});

//delete password before send to user
userSchema.methods.toJSON = function () {
  const user = this;
  const userObj = user.toObject();
  delete userObj.password;
  return userObj;
};

//find by Credentials static function to get the user with the credentials like User.findByCredentials
userSchema.statics.findByCredentials = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid user or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid user or password");
  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
