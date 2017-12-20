// set variables for required node modules in order to include functionality in project
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const app = express();


// tells project where to look for and how to use client-side content
app.use(express.static(path.resolve('public'))); // allow use of anything within the 'public' folder
app.use(express.static(path.resolve('bower_components'))); // location of angular sources
app.use(bodyParser.json()); // use body-parser to return user input as JSON objects

// identify the paths to required server-side folders
require(path.resolve('server', 'config', 'mongoose'));
require(path.resolve('server', 'config', 'routes'))(app);

// listen for a connection to the server and notify when connected
app.listen(port, function(){
    console.log('listening on port:', port);
});
