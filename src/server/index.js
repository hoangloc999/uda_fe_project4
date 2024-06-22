const path = require("path")
const express = require("express") 
const bodyParser = require("body-parser") 
const dotenv = require("dotenv") 
const fetch = require("node-fetch")
const cors = require("cors") 

dotenv.config();

const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('dist'))

//console.log(__dirname);
// API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY

app.get('/', function (req, res) {  
    //console.log(`Your API key is ${process.env.API_KEY}`);
    res.sendFile('dist/index.html')
})


// POST Route
app.post('/api', async function(req, res) {
    userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`

    const response = await fetch(apiURL)
    const mcData = await response.json()
    console.log(mcData)
    res.send(mcData)
    /** server sends only specified data to the client with below codes
     * const projectData = {
     *  score_tag : mcData.score_tag,
     *  agreement : mcData.agreement,
     *  subjectivity : mcData.subjectivity,
     *  confidence : mcData.confidence,
     *  irony : mcData.irony
     * }
     * res.send(projectData);
     * */
})



// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


