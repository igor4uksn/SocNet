/**
 * Created by IGOR on 19.12.2015.
 */
var mongoose = require('mongoose');
var UserSchema = mongoose.schemas.User;
var PostSchema = mongoose.schemas.Post;
var _User = mongoose.model('user', UserSchema);
var _Post = mongoose.model('post', PostSchema);

var Post = function(){
    this.viewPost = function(req,res,next) {
        var postId = req.params.postId;
        _Post.findById(postId,function(err, response){
            if (err){ return next(err);}
            res.status(200).send('view post: ' + postId)
        });
    };
    this.viewAll = function(req,res,next) {
        var author = req.params.author;
        _Post.find({ _author : author},function(err, response){
            if (err){ return next(err);}
            res.status(200).send('view all post: ' + author)
        });
    };
    this.addPost = function(req, res, next){
        var body = req.body;
        var post = new _Post(body);
        post.save(function(err,post){
            if (err){return next(err)}
            res.status(200).send('create post! ' + post);
        });
    };
    this.deletePost = function(req, res, next) {
        var id = req.params.id;
        _Post.findByIdAndRemove(id, function(err, res){
            if (err){ return next(err); }
            res.status(200).send('delete user: ' + id);
        });
    };
};
module.exports = Post;