
const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send all the promotionses to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotions: ' + req.body.name + ' with details: ' + req.body.description);
});


promoRouter.route('/:promoId ')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) =>{
    return res.end(`Will return a specific promotions with id ${req.params.promoId }` );

})

.put((req,res,next) =>{
    return res.end(`Will modify a specific promotions with id ${req.params.promoId }` );

})

.delete((req,res,next) =>{
    return res.end(`Will delete a specific promotions with id ${req.params.promoId }` );

});



module.exports = promoRouter;