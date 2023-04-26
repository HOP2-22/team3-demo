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
