const express = require("express");
const circularJSON = require("circular-json");
const scripController = require("../controllers/scripController");

const { sendKycRequest } = scripController;

const router = express.Router();

router.post("/kycRequest", (req, res) => {
  return sendKycRequest(req.body)
    .then(response => {
      return res.send(response);
    })
    .catch(error => {
      res.status(400).send(JSON.parse(circularJSON.stringify(error)));
    });
});

module.exports = router;
