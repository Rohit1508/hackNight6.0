const express = require("express");

const router = express.Router();

const client = require("./client");

router.use("/client", client);

module.exports = router;
