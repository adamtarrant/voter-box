//NPM and Node Modules
const express = require('express');
const https = require('https');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const helmet = require('helmet');

//Config
const config = process.env.NODE_ENV == 'production' ? require('./config/config_prod.js') : require('./config/config_dev.js');

//Init of express app
const app = express();

//Init of multer
const upload = multer({dest: path.join(__dirname, './uploads/')});

//Static middleware
app.use(helmet());
app.use(session({
    secret: config.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../../public'))); 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('There was an error on the server');
});

///Route handlers
app.post('', (req,res) => {

});

app.all('/*', (req, res) => {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found. Please upload a file to get metadata");
});

//Named function declarations

//Exported functions and objects
module.exports = {
    app
};