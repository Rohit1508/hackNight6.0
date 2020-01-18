const { Connection, Request } = require("tedious");
const apiService = require("../services/apiService");
const scripMasterQuery = require("../utilities/scripMasterQuery");
const {
  SCRIP_DB: { HOST, USER, PASSWORD, DATABASE, PORT }
} = require("../config/env-config");

/*
const mysql_pool = mysql.createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  port: PORT
}); */

// Create connection to database

const config = {
  authentication: {
    options: {
      userName: USER, // update me
      password: PASSWORD // update me
    },
    type: "default"
  },
  server: HOST, // update me
  options: {
    database: DATABASE, //update me
    //encrypt: true
  }
};

  function queryDatabase(connection) {
    console.log("Reading rows from the Table...");

    // Read all rows from table
    const request = new Request(
      `select * from login`,
      (err, rowCount) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`${rowCount} row(s) returned`);
        }
      }

    );

    request.on("row", columns => {
      columns.forEach(column => {
        console.log("%s\t%s", column.metadata.colName, column.value);
      });
    });
    connection.execSql(request);
  }

const createConnection = () => {
  const connection = new Connection(config);
  connection.on("connect", err => {
    if (err) {
      console.error(err.message);
    } else {
      queryDatabase(connection);
    }
  });
};

const getFilterOptions = async () => {
  const conn = await createConnection();
  return queryDatabase(scripMasterQuery.getFilterOptions(), conn);
};

const getStockDetails = async params => {
  const conn = await createConnection();
  return queryDatabase(scripMasterQuery.getStockDetails(params), conn);
};


module.exports = {
  getFilterOptions,
  getStockDetails,
};








// Attempt to connect and execute queries if connection goes through

