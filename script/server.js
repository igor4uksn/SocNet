/**
 * Created by IGOR on 19.12.2015.
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 3030;
var mongoose = require('mongoose');
var db = mongoose.connection;

require('./models');
require('./routes')(app);


var myModule = require('./handlers/user');
/*app.use("*",function(req,res){
    res.status(404).send("Page not found 404");
});*/
mongoose.connect('localhost','VrakashyDB',27017);

db.on('error', function(err) {
    console.error(err);
});

db.once('open', function() {
    app.listen(port, function () {
        console.log('Server start success = ' + port);
    });
});