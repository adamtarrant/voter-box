const fs = require('fs');

module.exports= {
    port: 8080,
    HTTPSPort: 443,
    mySqlUri: "",
    dbName: "",
    SESSION_SECRET: "oddment"
/*     sslOptions: {
        key: fs.readFileSync('./img-search-api/config/key.pem'),
        cert: fs.readFileSync('./img-search-api/config/cert.pem'),
        passphrase: "securepassphrase",
    } */
}