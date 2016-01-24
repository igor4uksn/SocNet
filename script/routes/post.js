/**
 * Created by IGOR on 19.12.2015.
 */
module.exports = (function(){
    var express = require('express');
    var PostHandler = require('../handlers/post.js');
    var postRouter = express.Router();
    var postHandler = new PostHandler;

    postRouter.get('/',postHandler.viewAll);
    postRouter.post('/',postHandler.addPost);
    postRouter.get('/:postId',postHandler.viewPost);
    postRouter.delete('/:postId',postHandler.deletePost);

    return postRouter;
})();