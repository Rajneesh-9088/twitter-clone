const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require('passport');

// to get the signup form
router.get("/register", (req, res) => {
  res.render("auth/signup", {message: req.flash('error')});
});

router.post("/register", async (req, res) => {
  try {
    const user = {
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
    };
  
    const newUser = await User.register(user, req.body.password);
  
    res.status(200).send(newUser);
  } catch(e) {
    req.flash('error',e.message)
    res.redirect('/register');
  }
});

// to get only login page
router.get("/login", (req, res) => {
  res.render("auth/login");
});

// actual loginn by by info
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    // failureFlash: true,
}), (req,res) => {
    res.redirect('/');
})

router.get('/logout', (req,res) => {
   req.logout();
   res.redirect('/login');
})


module.exports = router;
