const express = require("express");

const router = express.Router();

const scrip = require("./scrip");

router.use("/scrip", scrip);

module.exports = router;
