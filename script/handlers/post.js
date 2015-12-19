/**
 * Created by IGOR on 19.12.2015.
 */
var Post = function(){
    this.addPost = function(req, res, next){
        res.status(200).send("New  Post");
    };
    this.deletePost = function(req, res, next) {
        res.status(200).send("Post deleted");
    };
};
module.exports = Post;