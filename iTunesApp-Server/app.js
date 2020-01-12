const bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose');
var schemas = require('./mongoSchema');
const express = require('express');
const https = require('https');
var admin = require('firebase-admin');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var SearchItune = schemas.SearchItune;
var Users=schemas.Users


//web api 
app.get('/', (req, res) => {
});

app.get('/getUsersList', (req, res) => {
Users.find({},function(err,allUsers){
res.send(allUsers)
})
});

app.delete('/deleteUser',(req, res) => {
  Users.deleteOne({_id:req.query.id},function (err, userDelete) {
res.send("delete") 
  })
})


app.post('/addUser', (req, res) => {
 Users.find({email:req.body.email},function(err,document){
  if (document.length==0) {
    var user = new Users({email: req.body.email,password:req.body.password});
    user.save(function(err,dbUser){
    })
    }
 })
});


app.post('/ItunesList', (req, res) => {
  itunes=req.body.search
  https.get(`https://itunes.apple.com/search?term=${req.body.search}`, (resp) => {
  let data = '';
    // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
    });
    resp.on('end', () => {
      res.send(data);
      });
  }).on("error", (err) => {
    res.send(err);
  });

});


app.post('/searchItunes', (req, res) => {
  
  SearchItune.find({value:req.body.search}, function (err, Itune) {
    if (err) return handleError(err);
    if (Itune.length==0) 
    {
    var itune = new SearchItune({value: req.body.search,searchSum:1});
    itune.save(itune, function (err, document) {
      if (err) return handleError(err);
    });}

  else{
    SearchItune.updateOne({value:Itune[0].value}, {searchSum:++Itune[0].searchSum}, function (err, docoment) {
    });

  }
  });
});

app.get('/getlimitedlist', (req, res) => {
  SearchItune.find({}).sort({searchSum: -1}).limit(10).exec(function(err, projects) {
  res.send(projects);
    });
});


//server runing and listen
app.listen(port, () => console.log(`TravellMe listening on port ${port}!`))