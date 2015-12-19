/**
 * Created by IGOR on 19.12.2015.
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 3030;

require('./routes')(app);


var myModule = require('./handlers/user');

app.listen(port, function(){
    console.log('Server start success = ' + port);
});