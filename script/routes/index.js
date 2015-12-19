/**
 * Created by IGOR on 19.12.2015.
 */
module.exports = function(app){
    var bodyParser = require('body-parser');
    var userRouter = require('./user');

    app.use(bodyParser.json());
    app.get('/', function(req, res, next){
        res.status(200).send(req.ip);
    });

    app.use('/user', userRouter);

};