const express = require('express'),
        bodyParser = require('body-parser'),
        app = express(),
        port = 3033;
const dates = require("./dates");
const database = require("./database");

app.use(bodyParser.json());


//crud page


app.get('/api/dates', dates.read)

app.post('/api/dates', dates.create)

app.put('/api/dates/:id', dates.update)

app.delete('/api/dates/:id', dates.delete)

console.log(database.dates[0]);

app.listen(port, () => 
console.log(`listening on ${port}`));




