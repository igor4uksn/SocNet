var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = Schema({
    _id : Number,
    tags : [{type: String}],
    text : String,
    img : String,
    _author : {type: Number, ref: 'User'},
    time : {type : Date, default : Date.now}
}, {collection : 'Post'});

mongoose.schemas.Post = PostSchema;