const User = require("../model/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};
exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({ email, password: hashedPassword });
    res.send(user.email);
  } catch (error) {
    res.send(error);
  }
};
exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign(
          {
            email: user.email,
          },
          process.env.ACCESS_TOKEN_KEY,
          { expiresIn: "1h" }
        );
        res.status(200).send({
          email: user.email,
          match: match,
          token: token,
          owner: user._id,
        });
      } else {
        res.status(404).send({ message: "wrong password" });
      }
    } else {
      res.status(404).send({ message: "no user found" });
    }
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
