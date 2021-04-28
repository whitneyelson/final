var express = require('express');
var router = express.Router();
let bodyParser = require('body-parser');

//serves static files from the 'public' folder so the user needs the URLs or you need to give links to the various pages in a nav. This essentially makes your server work like any other static site
router.use(express.static('public'));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//MongoDB Connections 

let MongoClient = require('mongodb').MongoClient;

let connectionString = "mongodb+srv://whitneyelson:WBlanchet20@cluster0.mhd11.mongodb.net/craig-photo?retryWrites=true&w=majority"; 

router.get('/contact-confirmation', (req, res) => {
    res.sendFile(__dirname + "/contact-confirmation.html")
})

router.get('/contact', (req, res) => {
    res.sendFile(__dirname + "/contact.html")
})

MongoClient.connect(connectionString, {useUnifiedTopology: true}, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database');
    let db = client.db("craig-photo");
    let contactCollection = db.collection("contact-forms");
    router.post('/contact-forms', (req, res) => {
        contactCollection.insertOne(req.body).then(result => {
            console.log(req.body);
            res.sendFile(__dirname + "/contact-confirmation.html");
        })
        .catch(error => console.error(error))
    })
})

module.exports = router;
