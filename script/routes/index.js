/**
 * Created by IGOR on 19.12.2015.
 */
module.exports = function(app){
    var bodyParser = require('body-parser');
    var userRouter = require('./user');
    var postRouter = require('./post');

    app.use(bodyParser.json());

    app.get('/', function(req, res, next){
        console.log("root");
        res.status(200).send("Main page in future"+req.ip);
    });

    app.use('/user', userRouter);
    app.use('/post', postRouter);

//auth????

};