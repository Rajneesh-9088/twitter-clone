const express = require("express");
const router = express.Router();
const Post = require("../models/posts");
const { isLoggedIn } = require("../middleware");
const User = require("../models/user");

router.get("/profile", isLoggedIn, (req, res) => {
  const payload = {
    user: req.user,
    displayName: req.user.firstName + " " + req.user.lastName,
  };

  res.render("profilePage", { payload });
});

router.get("/profile/:username", isLoggedIn, async (req, res) => {
  const user = await User.findOne({ username: req.params.username });

  const payload = {
    user: user,
    displayName: user.firstName + " " + user.lastName,
  };

  res.render("profilePage", { payload });
});

router.get("/follow/:userId/:profileId", async (req, res) => {
  const { userId, profileId } = req.params;

  // push profileId into the current users' following array

  const currentUser = await User.findById(userId);
  const profileUser = await User.findById(profileId);

  currentUser.following.push(profileId);
  profileUser.followers.push(currentUser);

  await currentUser.save();
  await profileUser.save();

  res.redirect(`/profile/${profileUser.username}`);
});

module.exports = router;
