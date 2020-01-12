var mongoose = require('mongoose');

//connect to mongo
mongoose.connect('mongodb://localhost:27017/itunesDB', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("connect to mongo")});


var SearchItuneSchema = new mongoose.Schema({
    value:String,
    searchSum:Number
  });
var SearchItune = mongoose.model('SearchItune', SearchItuneSchema);


var UsersSchema = new mongoose.Schema({
  email:String,
  password:Number
});
var Users = mongoose.model('Users', UsersSchema);

var my_schemas = {'SearchItune':SearchItune,'Users':Users};
module.exports = my_schemas;


