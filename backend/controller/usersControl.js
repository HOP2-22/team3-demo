const User = require("../Model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const role = require("../config/roles");

exports.createUser = async (req, res) => {
  const isArtist = req.query.isArtist;

  try {
    const { email, password, name, image } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
      name: name,
      Role: role.Client,
      isArtist: isArtist,
      image: image,
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

const ACCESS_TOKEN_KEY = "secret123";

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
        user: user,
        isArtist: user.isArtist,
        Role: role.Client,
      },
      ACCESS_TOKEN_KEY
    );

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: "password dont match" });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.body.id;
  try {
    console.log(id);
    await User.findByIdAndDelete(id);
    res.status(200).json({ deleteUser: "succesful" });
  } catch (error) {
    res.status(400).json({ message: "can't delete" });
  }
};

exports.DeleteAll = async (req, res) => {
  await User.deleteMany();
  res.status(200).json({ success: true });
};
exports.getUser = async (req, res) => {
  const token = req.headers.token || "";
  if (!token) {
    return res.status(404).json({ message: "Invalid token" });
  }
  const data = await jwt.decode(token, ACCESS_TOKEN_KEY);
  res.status(200).json(data);
};
