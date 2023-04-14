const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.send({ error: "token alga" }).status(500);
  }

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, user) => {
      if (error) {
        return res.send({ error: error }).status(500);
      }

      if (user.role === "admin") {
        console.log("this is admin");
      }
      next();
    });
  } catch (error) {
    res.send(error).status(404);
  }
};
