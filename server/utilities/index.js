const fs = require("fs");

const utilities = {
  getRandomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
};

module.exports = utilities;
