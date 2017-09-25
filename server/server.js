var express = require('express');
var http = require("http");
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

require('./api.js')(app);

console.log('starting server on port 8090');

http.createServer(app).listen(8090);