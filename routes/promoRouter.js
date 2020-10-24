const express = require("express");

const router = express.Router();

router.get("/promotions", (req, res , next ) => {
    return res.end("Will return all list of promotions");
});

router.post("/promotions", (req, res , next ) => {
    return res.end("Will add single promotions");
});

router.get("/promotions/:promoId", (req, res , next ) => {
    return res.end(`Will return single promotions from the list with id of :${req.params.promoId}`);
});

router.put("/promotions/:promoId", (req, res , next ) => {
    return res.end(`Will modify single promotions from the list with id of :${req.params.promoId}`);
});

router.delete("/promotions/:promoId", (req, res , next ) => {
    return res.end(`Will delete single promotions from the list with id of :${req.params.promoId}`);
});



module.exports = router;
