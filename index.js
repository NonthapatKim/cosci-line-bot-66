var express = require('express');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var cors = require('cors');

var axios = require('axios');
dotenv.config();

var app = express()

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(process.env.PORT || 8080, console.log('server is running'));


app.get('/', (req,res) => {
    res.send('เค้าว่าสายตามันหลอกกันไม่ได้ 👀')
})

app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    let msg = req.body.events[0].message.text
    
    reply(reply_token, msg)
    res.sendStatus(200)
})

function reply(reply_token, msg) {

    const ChannelaccessToken = process.env.SECERT_CH_ID

    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: msg
        },]
    })

    axios.post(`https://api.line.me/v2/bot/message/reply`, body, {
        headers: {
            Authorization: `Bearer ${ChannelaccessToken}`,
            'Content-Type': 'application/json'
        }
    })
}