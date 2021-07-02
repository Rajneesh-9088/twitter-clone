const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const {isLoggedIn} = require('../../middleware.js');

// to get all posts
router.get('/api/post',isLoggedIn, async (req,res) => {
     /// find everythig 
    const posts =    await Post.find({})


    res.json(posts);


})


// To add new post
router.post('/api/post', isLoggedIn, async (req,res) => {

    const post = {
        content: req.body.content,
        postedBy: req.user.username,
    }

   const newPost =  await Post.create(post);

   res.json(newPost);
})

module.exports = router;


