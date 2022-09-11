const express = require('express')
const fs = require('fs');
var bodyParser = require("body-parser");
const app = express();

const cors = require("cors");
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 8080;
app.use(cors())

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

app.get('/aja', (req, res) => {
    fs.readFile('public/aja.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
})


app.post("/AJA-add", (req, res) => {
    var index = 0;
    fs.readdir("storage/AJA", function (err, files) {
        if (err) {
            console.log(err)
            return;
        }
        files.forEach(function (file, num) {
            if(index < num+1){
                index = num+1
            } 
            console.log(num+1)
            console.log("aaaa"+index)
        })
        index = index + 1
        var data = req.body.message
        fs.writeFile("storage/AJA/"+index+".txt",data,'utf8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    })

    res.send("nice!")
})

app.get('/AJA-get', (req, res) => {
    var jsonObj = {
        messages: [

        ]
    }

    fs.readdir("storage/AJA", function (err, files) {
        files.forEach(function (file, num) {
            fs.readFile('storage/AJA/'+file, 'utf8', (err, data) => {
                jsonObj.messages[num] = `${data}`;
                console.log(`${data}`)
            })
        })
    })

    clearCheck = setInterval(CheckForRes,50)
    function CheckForRes(){
        console.log(jsonObj)
        res.send(jsonObj)
        clearInterval(clearCheck);
    }


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})