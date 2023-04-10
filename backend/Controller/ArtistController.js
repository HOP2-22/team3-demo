const Artist = require("../Model/ArtistModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createArtist = async (req, res) => {
  try {
    const { email, password, type_of } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    const newUser = await Artist.create({
      email: email,
      password: hashedPassword,
      typeof: type_of,
    });
    console.log(newUser);

    res.status(200).json({ match: true, data: newUser });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
exports.getAll = async (req, res) => {
  try {
    const Artists = await Artist.find();
    res.status(200).json({ match: true, Artists });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const ACCESS_TOKEN_KEY = "secret123";
exports.login = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await Artist.findOne({ email: email });
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
