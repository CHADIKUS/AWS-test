const express = require('express')
const fs = require('fs');
var bodyParser = require("body-parser");
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 8080;

app.get('/', (req, res) => {
    fs.readFile('public/index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
        });
})

app.get('/northstar', (req, res) => {
    fs.readFile('public/northstar.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
        });
})

app.get('/cube', (req, res) => {
    fs.readFile('public/cube.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
        });
})

app.get('/neon', (req, res) => {
    fs.readFile('public/neon.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
        });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})