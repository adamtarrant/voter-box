
module.exports = function() {
    const mysql = require('mysql');

    const con = mysql.createConnection({
        host: "localhost",
        user: "adam",
        password: "voter_user"
      });
}