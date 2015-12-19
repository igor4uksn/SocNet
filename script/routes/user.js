/**
 * Created by IGOR on 19.12.2015.
 */
module.exports = (function(){
    var express = require('express');
    var UserHandler = require('../handlers/user');
    var userRouter = express.Router();
    var userHandler = new UserHandler();

    userRouter.post('/', userHandler.updateUser);
    userRouter.post('/:name', userHandler.addFriend);
    userRouter.post('/:name/:id', userHandler.deleteFriend);
    userRouter.post('/:name', userHandler.addPost);
    userRouter.post('/:name/:id', userHandler.deletePost);


    return userRouter;
})();