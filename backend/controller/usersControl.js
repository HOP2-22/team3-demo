const User = require("../Model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Client } = require("../config/roles");

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      email: email,
      password: hashedPassword,
      Role: Client,
    });

    res.status(200).json({ data: newUser });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getUserById = async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await User.findById(_id);
    res.send({ data: user });
  } catch (error) {
    res.send({ error: error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "password is dont match" });
    }

    const token = jwt.sign(
      {
        user: user.email,
        userId: user._id,
        role: "admin",
      },
      process.env.ACCESS_TOKEN_KEY
    );

    res.status(200).json({ match: match, user: user, token });
  } catch (error) {
    res.status(400).json({ message: "password dont match" });
  }
};
