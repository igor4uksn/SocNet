//post class constructor
function Post(post){
    this.id = post.id;
    this.text = post.text;
    this.img = post.img || "";
    this.author_id = post.author_id;
    this.time = post.time;

}
Post.prototype.share = function(){};
Post.prototype.like = function(){};

//user class constructor
function User(user){
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.pass = user.pass;
    this.avatar = user.avatar || "";
    this.birth = user.birth;//date of birth
    this.ip = user.ip; //ip ->> location
    this.friends = user.friends || [];
    this.post = user.post || [];
}
User.prototype.setAvatar = function(img){
    this.avatar = img;
};
User.prototype.addFriend = function(){};
User.prototype.deleteFriend = function(){};
User.prototype.newPost = function(){};
User.prototype.delPost = function(){};

//super user  class constructor
function SuperUser(user){
    User.apply(this, arguments);
}
//using inheritance
SuperUser.prototype = Object.create(User.prototype);
SuperUser.prototype.constructor = SuperUser;
//adding special methods for super user
SuperUser.prototype.banUser = function(){};
SuperUser.prototype.delUser = function(){};
//overriding User.prototype.delPost (I hope)
SuperUser.prototype.delPost = function(){};
