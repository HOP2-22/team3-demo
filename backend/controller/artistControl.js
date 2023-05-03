const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Artist } = require("../config/roles");
const artist = require("../Model/artist");

exports.createArtist = async (req, res) => {
  try {
    const { email, password, type_of, username } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await artist.create({
      email: email,
      password: hashedPassword,
      type_of: type_of,
      username: username,
      Role: Artist,
    });

    res.status(200).json({ data: newUser });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getArtist = async (req, res) => {
  try {
    const users = await artist.find({});
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getArtistById = async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await artist.findById(_id);
    res.send({ data: user });
  } catch (error) {
    res.send({ error: error });
  }
};
const ACCESS_TOKEN_KEY = "secret123";

exports.login = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await artist.findOne({ email: email });
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

exports.deleteArtist = async (req, res) => {
  const id = req.body.id;
  try {
    console.log(id);
    await artist.findByIdAndDelete(id);
    res.status(200).json({ deleteUser: "succesful" });
  } catch (error) {
    res.status(400).json({ message: "can't delete" });
  }
};

exports.DeleteAll = async (req, res) => {
  await artist.deleteMany();
  res.status(200).json({ success: true });
};
