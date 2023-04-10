const User = require("../Model/UserModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });
    console.log(newUser);

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
const ACCESS_TOKEN_KEY = "secret123";

exports.login = async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    console.log(user, user.password);
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "password is dont match" });
    }
    const token = jwt.sign(
      {
        user: user.email,
        userId: user._id,
      },
      ACCESS_TOKEN_KEY
    );
    res.status(200).json({ match: match, user: user, token });
  } catch (error) {
    res.status(400).json({ message: "password is dont match" });
  }
};
