const express = require('express'),
        bodyParser = require('body-parser'),
        app = express(),
        port = 3033;

app.use(bodyParser.json());


const dates = require('./dates');

console.log()

app.listen(port, () => 
console.log(`listening on ${port}`));




