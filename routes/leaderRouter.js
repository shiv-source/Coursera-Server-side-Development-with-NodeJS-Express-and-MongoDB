
const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send all the leaderses to you!');
})
.post((req, res, next) => {
    res.end('Will add the leaders: ' + req.body.name + ' with details: ' + req.body.description);
});


leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) =>{
    return res.end(`Will return a specific leaders with id ${req.params.leaderId}` );

})

.put((req,res,next) =>{
    return res.end(`Will modify a specific leaders with id ${req.params.leaderId}` );

})

.delete((req,res,next) =>{
    return res.end(`Will delete a specific leaders with id ${req.params.leaderId}` );

});



module.exports = leaderRouter;