const express = require('express');
const router = express.Router();
const {isLoggedIn} = require("../middleware");


router.get('/messages', (req,res)=>{
    res.render('chatPage', {user: req.user} );
})





module.exports = router;