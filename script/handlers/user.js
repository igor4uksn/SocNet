/**
 * Created by IGOR on 19.12.2015.
 */
var mongoose = require('mongoose');
var UserSchema = mongoose.schemas.User;
var PostSchema = mongoose.schemas.Post;
var _User = mongoose.model('user', UserSchema);
var _Post = mongoose.model('post', PostSchema);

var User = function(){
    this.create = function(req, res, next){
        var body = req.body;
        var user = new _User(body);
        user.save(function (err, user) {
            if (err) {return next(err); }
            res.status(200).send(user);
        });
        //console.log("user sreate");
    } ;
    this.view = function(req, res, next) {
        var id = req.params.id;
        _User.findById(id,function(err, response){
            if (err){ return next(err);}
        res.status(200).send('request for user: ' + id);
        });
        // console.log("user  view");
    };
    this.updateUser = function(req, res, next){
       // console.log("user  update");
        var id = req.params.id;
        var body = req.body;
        _User.update({_id: id}, {$set : body}, function(err,user){
            if (err){ return next(err);}
            res.status(200).send(user);
        });
    };
    this.addFriend = function(req, res, next){
        var id = req.params.id;
        var idAdd = req.query.idAdd;
        _User.findByIdAndUpdate(id, {$push: {friends: idAdd}}, function(err, response){
            if (err) {return next(err);}
            res.status(200).send('user ' + id + ' added ' + idAdd +
                ' to friends list');
        });
    };
    this.deleteFriend = function(req, res, next){
        var id = req.params.id;
        var idDelete = req.query.idDelete;
        _User.findByIdAndUpdate(id, {$pull: {friends: idDelete}}, function(err,response){
            if (err){return next(err)}
            res.status(200).send('user ' + id + ' deleted ' + idDelete +
                ' from friends list');
        });
    };
    this.friends = function(req,res,next){
        var id = req.params.id;
        _User.findById({_id: id},'friends', function(err,response){
            if (err){ return next(err);}
            res.status(200).send('user ' + id + ' friends list: ' + response);
        });
    };
};

module.exports = User;