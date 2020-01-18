const express = require("express");
const circularJSON = require("circular-json");
const scripController = require("../controllers/scripController");

const {
  uniqueKeyValue,
  getFilterOptions,
  getStockDetails,
  updateCompanyName
} = scripController;

const router = express.Router();

// removing `All` from query params, making it easy for sql query where clause
const makeParams = query => {
  const params = {};
  Object.entries(query).forEach(item => {
    if (item[1] === "All") params[item[0]] = null;
    else params[item[0]] = item[1];
  });
  return params;
};

router.get("/info", (req, res) => {
  return getFilterOptions()
    .then(response => {
      return res.send(uniqueKeyValue(response));
    })
    .catch(error => {
      res.status(400).send(JSON.parse(circularJSON.stringify(error)));
    });
});

router.get("/details", (req, res) => {
  const params = makeParams(req.query);
  return getStockDetails(params)
    .then(response => {
      return res.send(response);
    })
    .catch(error => {
      res.status(400).send(JSON.parse(circularJSON.stringify(error)));
    });
});

router.post("/update", (req, res) => {
  return updateCompanyName(req.body)
    .then(response => {
      return res.send(response);
    })
    .catch(error => {
      res.status(400).send(JSON.parse(circularJSON.stringify(error)));
    });
});

module.exports = router;
