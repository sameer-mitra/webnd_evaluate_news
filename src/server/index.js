var path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const mockAPIResponse = require('./mockAPI.js')

const app = express()

dotenv.config();
const api_key = 'ce42eefb1770d329b7adde8fdbc5345a'; //process.env.API_KEY;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname)
console.log(`Your API key is ${api_key}`);

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

app.post('/process', async(req, res) => {
    console.log('req.body ===+>', req.body)
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${req.body.url}&lang=en`);
    try {
        const data = await response.json();
        console.log(data);
        res.send(data);
      }catch (error) {
      console.log("error", error);
      }
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
