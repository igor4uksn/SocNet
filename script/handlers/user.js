/**
 * Created by IGOR on 19.12.2015.
 */
var User = function(){
    this.create = function(req, res, next){
        res.status(200).send(req.body);
    } ;
    this.view = function(req, res, next) {
        var id = req.params.id;
        res.status(200).send('request for user: ' + id);
    };
    this.updateUser = function(req, res, next){
        res.status(200).send("User updated");
    };
    this.addFriend = function(req, res, next){
        res.status(200).send("New friend added");
    };
    this.deleteFriend = function(req, res, next){
        res.status(200).send("Friend deleted");
    };
   // this.getFriends =
};

module.exports = User;