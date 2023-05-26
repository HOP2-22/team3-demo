const express = require("express");

const { authenticateToken } = require("../middleware/veryfing");

const {
  checkUser,

  createUser,
  getUsers,
  getUser,
  login,

  deleteUser,
  DeleteAll,
} = require("../controller/user");

const router = express.Router();

//check token
router.get("/getUser", checkUser);

router.get("/", getUsers);

//auth
router.post("/login", login);
router.post("/create", createUser);

router.delete("/deleteAll", DeleteAll);

router.get("/:id").get(getUser).delete(deleteUser);

module.exports = router;
