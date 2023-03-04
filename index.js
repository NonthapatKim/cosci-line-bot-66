var express = require('express');
var bodyParser = require('body-parser');
//var jsonParser = bodyParser.json()
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

app.post('/webhook', (req, res) => {
    res.send(req.body.events)
})

function reply(reply_token) {

    const ChannelaccessToken = process.env.SECERT_CH_ID

    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: 'Hello'
        },
        {
            type: 'text',
            text: 'How are you?'
        }]
    })

    axios.post(`https://api.line.me/v2/bot/message/reply`, body, {
        headers: {
            Authorization: `Bearer ${ChannelaccessToken}`,
            'Content-Type': 'application/json'
        }
    })

    // request.post({
    //     url: 'https://api.line.me/v2/bot/message/reply',
    //     headers: headers,
    //     body: body
    // }, (err, res, body) => {
    //     console.log('status = ' + res.statusCode);
    // });
}