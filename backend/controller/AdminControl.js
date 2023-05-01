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
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await admin.findOne({ email: email });
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "password is dont match" });
    }
    console.log("================================================ 123213213");
    const token = jwt.sign(
      {
        data: admin,
      },
      ACCESS_TOKEN_KEY
    );
    res.status(200).json({ match: match });
  } catch (error) {
    res.status(400).json({ message: "password is dont match" });
  }
};
