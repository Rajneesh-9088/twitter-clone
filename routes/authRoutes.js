const express = require('express');
const router = express.Router();
const User = require('../models/user');


// to get the signup form
router.get('/register', (req, res) => {
    res.render('auth/signup')
})


router.post('/register', async (req,res)=> {
   
     const user = {
         firstName: req.body.firstname,
         lastName: req.body.lastname,
         email: req.body.email,
         username: req.body.username
     }


     const newUser = await User.register(user,req.body.password);

     res.status(200).send.(newUser);

    
})











module.exports = router;