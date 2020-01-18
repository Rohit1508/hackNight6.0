const DOMAIN = "https://api-eq-dev.paytmmoney.com";

const internalDomain = "http://dev-bo-periscope.equity-bo";

module.exports = {
  APM_URL: "",
  PORT: 8989,
  API_HOST: {
    STOCK_URL: `${internalDomain}/backoffice/periscope/v1/settlement`,

  },
  SCRIP_DB: {
    HOST: "webdot.database.windows.net",
    USER: "vikas",
    PASSWORD: "rungta@2210",
    DATABASE: "WebDot",
    PORT: 1433
  }
};
