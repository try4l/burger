// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Node connected (to SQL database ", connection.database, ") as id " + connection.threadId + " on Port: ", connection.port);
  console.log("Eat da Burger is in the house!");
});

// Export connection for our ORM to use.
module.exports = connection;