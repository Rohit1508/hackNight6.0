const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "webdot.database.windows.net",
  user: "vikas",
  password: "rungta@2210",
  database: "WebDot",
  port : 1433
});

connection.connect();

connection.query(
  "SELECT * FROM equity_scrip_master where exchange='BSE' and segment='E' and instrument='EQUITY' and series='X' ",
  (error, results, fields) => {
    if (error) throw error;
    console.log("The solution is: ", results, fields);
  }
);

connection.end();

/* var server = "webdot.database.windows.net"
var port = 1433
var user = "vikas"
var password = "rungta@2210"
var database = "WebDot" */