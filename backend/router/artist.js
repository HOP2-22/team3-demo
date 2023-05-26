const express = require("express");

const {
  checkArtist,

  getArtists,
  getArtist,

  createArtist,
  login,

  deleteArtist,
  DeleteAll,
} = require("../controller/artist");

const router = express.Router();

router.get("/getArtist", checkArtist);

router.get("/", getArtists);

router.post("/create", createArtist);
router.post("/login", login);

router.delete("/deleteAll", DeleteAll);

router.route("/:id").get(getArtist).delete(deleteArtist);
module.exports = router;
