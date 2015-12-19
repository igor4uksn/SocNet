/**
 * Created by IGOR on 19.12.2015.
 */
module.exports = (function(){
    var express = require('express');
    var UserHandler = require('../handlers/user');
    var userRouter = express.Router();
    var userHandler = new UserHandler();

    userRouter.get('/:id', userHandler.view);
    userRouter.post('/', userHandler.updateUser);
    userRouter.post('/:name', userHandler.addFriend);
    userRouter.post('/:name/:id', userHandler.deleteFriend);
 


    return userRouter;
})();