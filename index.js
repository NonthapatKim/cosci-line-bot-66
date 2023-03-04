var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var dotenv = require('dotenv');
var cors = require('cors');

var axios = require('axios');
dotenv.config();

var app = express()

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))

app.listen(process.env.PORT || 8080, console.log('server is running'));


app.get('/', (req,res) => {
    res.send('เค้าว่าสายตามันหลอกกันไม่ได้ 👀')
})

app.post('/webhook', (req,res) => {
    res.send(req.body.events[0])
})