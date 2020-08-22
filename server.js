var mysql = require('mysql');
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");


var connection = mysql.createConnection({
    host : "localhost",
    user : "dhio",
    password: "1234",
    database: "projektelkom"
});


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
var queryString = 'SELECT * FROM trennilaiprojek';
var queryString2 = 'SELECT * FROM sumberbudget';
var queryString3 = 'SELECT * FROM topseller';
var queryString4 = 'SELECT * FROM kategoriprojek';

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Fetching data from database
app.get('/', function(req, res) {
    connection.query(queryString, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        return res.json(rows);
    });
    // connection.end();
});
app.get('/budget', function(req, res) {
    connection.query(queryString2, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        return res.json(rows);
    });
    // connection.end();
});
app.get('/seller', function(req, res) {
    connection.query(queryString3, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        return res.json(rows);
    });
    // connection.end();
});
app.get('/TopCat', function(req, res) {
    connection.query(queryString4, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        return res.json(rows);
    });
    // connection.end();
});
//enable cross-domain request.
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);

app.listen(3000, function() {
    console.log("Server listening on port 3000");
});