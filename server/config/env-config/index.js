const path = require("path");
const production = require("./production");
const preprod = require("./preprod");
const staging = require("./staging");
const development = require("./development");
const localStaging = require("./localStaging");
const VERSION = require("./version");

const SERVER_ROOT = path.resolve(__dirname, "..");
const SERVER_NAME = "PERISCOPE";

const environment = {
  production,
  preprod,
  staging,
  development,
  localStaging
};

/**
 * Setting up environment variables.
 */
const ENV =
  process.env.NODE_ENV && environment[process.env.NODE_ENV]
    ? process.env.NODE_ENV
    : "development";

const config = environment[ENV];

/**
 * Cookie fields set and read by server.
 */
const cookieFields = {
  SESSION_ID: "app_t",
  INITIAL_TOKEN: "initial_t",
  USER_ID: "PM_PERISCOPE_USER_ID"
};

module.exports = {
  ...config,
  ENV,
  SERVER_NAME,
  SERVER_ROOT,
  VERSION,
  cookieFields
};
