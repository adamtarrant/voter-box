const mysql = require('mysql');
const con = require('./mysqlConnection');

con.connect(function() {
    if (err) throw err;
    console.log('connected to db');
    con.query('CREATE DATABASE votes', function (err, result) {
        if (err) throw err;
        console.log('voter database created');
    });

    let tables = [
        {
            'name': 'users',
            'columns': '(usersid VARCHAR(255), username VARCHAR(255), password VARCHAR(255), email VARCHAR(255))'
        },
        {
            'name': 'polls',
            'columns': '()'
        },

    ];
});