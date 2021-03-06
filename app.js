const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/database/database');
const CanteensRoute = require('./routes/route');
var cors = require('cors');

var port = 4000;
var app = express();


// connect to mongodb
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(db.database, { useNewUrlParser: true }, (err, db) => {
        if (err) throw err;
        if (db) { console.log('you are connected to Mongodb'); }
    });
}

//CORS
// app.use(function(req, res, next) {
//     res.header("access-control-allow-methods", "GET, POST, PUT, OPTIONS");
//     res.header("Content-Type", "application/json");
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//       next();
// });

// bodyparser middleware
// to parse incoming data in JSON format
app.use(body_parser.json());
// If extended is false, you can not post "nested object"
app.use(body_parser.urlencoded({ extended: true }));

// app listening on port = 2300
app.listen(process.env.PORT || 4000, (err) => {
    if (err) throw err;
    console.log('listen on port :', port);
});

// Routing
app.use('/canteen', CanteensRoute);

exports = app;
