const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin } = require("../config/roles");
const admin = require("../Model/admin");

exports.createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await admin.create({
      email: email,
      password: hashedPassword,
      Role: Admin,
    });

    res.status(200).json({ data: newUser });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
const ACCESS_TOKEN_KEY = "secret123";

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await admin.findOne({ email });
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "password is dont match" });
    }

    const token = jwt.sign(
      {
        user: user,
      },
      ACCESS_TOKEN_KEY
    );
    console.log("in progress");

    res.status(200).json({ match: match, user: user, token });
  } catch (error) {
    res.status(400).json({ message: "password dont match" });
  }
};
