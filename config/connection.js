// sql connection to export
var mysql = require("mysql");


//heroku connection syntax
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connectin = mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password:'hacktheplanet',
        database: 'todoagain_db'
    });
};


//local connection syntax below
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "default",
//     database: "burgers_db"
// });

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
