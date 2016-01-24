var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = Schema({
    _id: Number,
    email: String,
    pass: String,
    name: {
        first: {type: String, default: 'Vasya'},
        last: {type: String, default: 'Pupkin'}
    },
    birth: {},
    age: {},
    friends: [{type: Number}],
    posts: [{type: Number, ref:'Post'}],
    userStatus: {type: String, default: 'User'}
}, {collection: 'User', version: false});

mongoose.schemas = {};
mongoose.schemas.User = UserSchema;