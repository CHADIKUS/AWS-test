const express = require('express')
const fs = require('fs');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 8080;

app.get('/', (req, res) => {
    res.send("AAAAAAAAAAAAUGH")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})