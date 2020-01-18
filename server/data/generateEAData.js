const fs = require("fs");
const uuidv4 = require("uuid/v4");
const fnames = require("./fnames").data;
const lnames = require("./lnames").data;
const utilities = require("../utilities");

const getRandomEmailPrvdr = () => {
  const emailProviders = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "rediffmail.com"
  ];
  const randIndex = utilities.getRandomInt(0, emailProviders.length - 1);
  return emailProviders[randIndex];
};

const getRandomMobile = () => {
  const prefix = utilities.getRandomInt(7, 9);
  const suffix = Math.floor(Math.random() * 1000000000);
  return prefix * 1000000000 + suffix;
};

const getRandomEmail = (fname, lname) => {
  const randPrvdr = getRandomEmailPrvdr();
  return `${fname.toLowerCase()}.${lname.toLowerCase()}@${randPrvdr}`;
};

const getDataRecord = (fname, lname) => {
  const record = {};
  record.id = uuidv4();
  record.name = `${fname} ${lname}`;
  record.mobile = getRandomMobile();
  record.email = getRandomEmail(fname, lname);
  record.status = utilities.getRandomInt(0, 2);
  return record;
};

const sortedData = data =>
  data.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

const generateData = limit => {
  let i;
  let j;
  let iters = 0;
  const data = [];
  for (i = 0; i < lnames.length; ++i) {
    for (j = 0; j < fnames.length; ++j) {
      if (iters >= limit) {
        return sortedData(data);
      }
      ++iters;
      data.push(getDataRecord(fnames[j], lnames[i]));
    }
  }
  return sortedData(data);
};

const main = () => {
  const data = generateData(500);
  fs.writeFile(
    `${__dirname}/eaData.json`,
    JSON.stringify(data, null, 2),
    err => {
      if (err) throw err;
      console.log("Data written");
    }
  );
};

main();
