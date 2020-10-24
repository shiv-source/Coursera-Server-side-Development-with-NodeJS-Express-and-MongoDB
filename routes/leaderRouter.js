const express = require("express");

const router = express.Router();

router.get("/leaders", (req, res , next ) => {
    return res.end("Will return all list of leaders");
});

router.post("/leaders", (req, res , next ) => {
    return res.end("Will add single leaders");
});

router.get("/leaders/:leaderId", (req, res , next ) => {
    return res.end(`Will return single leaders from the list with id of :${req.params.leaderId}`);
});

router.put("/leaders/:leaderId", (req, res , next ) => {
    return res.end(`Will modify single leaders from the list with id of :${req.params.leaderId}`);
});

router.delete("/leaders/:leaderId", (req, res , next ) => {
    return res.end(`Will delete single leaders from the list with id of :${req.params.leaderId}`);
});



module.exports = router;
