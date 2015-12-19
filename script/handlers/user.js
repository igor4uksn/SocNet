/**
 * Created by IGOR on 19.12.2015.
 */
var User = function(){
    this.create = function(req, res, next){
        res.status(200).send(req.body);
    } ;
    this.updateUser = function(req, res, next){
        res.status(200).send("User updated");
    };
    this.addFriend = function(req, res, next){
        res.status(200).send("New friend added");
    }
    this.deleteFriend = function(req, res, next){
        res.status(200).send("Friend deleted");
    }
    this.addPost = function(req, res, next){
        res.status(200).send("New  Post");
    }
    this.deletePost = function(req, res, next){
        res.status(200).send("Post deleted");
    }
};

module.exports = User;