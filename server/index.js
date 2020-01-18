/**
 * Environment variables
 */
const circularJSON = require("circular-json");
const Prometheus = require("prom-client");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressStaticGzip = require("express-static-gzip");
const apm = require("elastic-apm-node");
const { setupReqLocals } = require("./middlewares/request-locals");
const {
  PORT,
  ENV,
  SERVER_NAME,
  APM_URL,
  VERSION
} = require("./config/env-config");
/**
 * Inititalize Elastic APM for monitoring.
 */

if (APM_URL && SERVER_NAME) {
  apm.start({ serviceName: SERVER_NAME, serverUrl: APM_URL });
  if (apm.isStarted()) {
    console.info(
      `Starting elastic-apm [endpoint: ${APM_URL}, server-name: ${SERVER_NAME}]`
    );
  }
}

/**
 * As a last case scenario, catch uncaught errors
 */
process.on("uncaughtException", error => {
  console.error(circularJSON.stringify({ Uncaught_Exception: error.stack }));
});

/**
 * Inititalize Prometheus for monitoring.
 */
console.info("Starting Prometheus node client");
Prometheus.collectDefaultMetrics({ timeout: 5000 });

/**
 * public data folder
 */
const staticDir = path.resolve(__dirname, "../public");

/**
 * Setup Express
 */
const app = express();
const apiRouter = require("./routers/api");
const authRouter = require("./routers/auth");

app.use(helmet());
console.info('"/health" shows server health stats');
app.use("/health", require("express-healthcheck")());

app.get("/info", (req, res) => {
  res.send(VERSION);
});

/**
 * Add Prometheus endpoint to collect metrics from.
 */
console.info('"/metrics" shows metrics by Prometheus');
app.get("/metrics", (req, res) => {
  res.set("Content-Type", Prometheus.register.contentType);
  res.end(Prometheus.register.metrics());
});

app.use(
  "/",
  expressStaticGzip(staticDir, {
    enableBrotli: true,
    orderPreference: ["br"]
  })
);

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// for using cookies in the browser
app.use(cookieParser());
app.use(setupReqLocals);

// Configure & init logging
// eslint-disable-next-line no-underscore-dangle
morgan.token(
  "remote-addr",
  req =>
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.ip ||
    req._remoteAddress ||
    (req.connection && req.connection.remoteAddress) ||
    undefined
);
morgan.token("req-header", req => req.headers || undefined);
// eslint-disable-next-line no-underscore-dangle
morgan.token("res-header", (req, res) => res._headers || undefined);
app.use(
  morgan(
    formatLog({
      responseTime: ":response-time",
      // remoteUser       : ':remote-user',
      remoteAddr: ":remote-addr",
      date: ":date[iso]",
      method: ":method",
      url: ":url",
      httpVersion: ":http-version",
      status: ":status",
      reqHeader: ":req-header",
      resHeader: ":res-header",
      resContentLength: ":res[content-length]",
      referrer: ":referrer",
      userAgent: ":user-agent"
    })
  )
);

function formatLog(obj) {
  const keys = Object.keys(obj);
  const token = /^:([-\w]{2,})(?:\[([^\]]+)\])?$/;

  return function loggingFormatter(tokens, req, res) {
    const data = {};
    keys.forEach(key => {
      const val = token.exec(obj[key]);
      data[key] = formatToken(
        val !== null ? tokens[val[1]](req, res, val[2]) : obj[key]
      );
    });
    console.info(circularJSON.stringify({ Incoming_Request: data }));
  };

  function formatToken(tkn) {
    if (tkn) {
      return tkn;
    }

    return "";
  }
}

app.use("/api", apiRouter);
app.use("/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running [port: ${PORT}, env: ${ENV}]`);
});
