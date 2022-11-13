const User = require("../models/userSchema");

//signup with create user
const signup = async (req, res) => {
  const { name, email, password, picture } = req.body;

  try {
    const user = await User.create({ name, email, password, picture });

    if (!user) return res.status(400).json({ message: "Can't create a user" });

    return res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    let msg;
    if (err.code == 11000) {
      msg = "User already exists";
    } else {
      msg = err.message;
    }
    res.status(400).json({ message: msg });
  }
};

//login with credentials

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password); //custom made findByCredentials see in userSchema model
    user.status = "online";
    await user.save();
    return res.status(200).json({ message: "Login successfull", user });
  } catch (err) {
    return res.json({ error: err.message });
  }
};

module.exports = {
  signup,
  login,
};
