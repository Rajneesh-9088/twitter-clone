const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const session = require('express-session')

// db connection
mongoose
  .connect("mongodb://localhost:27017/twitter-clone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({extended:true}));

// routes

const authRoutes = require('./routes/authRoutes');

app.use(session({
  secret: 'youcantfindmysecret',
  resave: false,
  saveUninitialized: true,
 
}))

app.use(authRoutes);

app.get("/", (req, res) => {
  res.render("home");
});




app.listen(3000, (req, res) => {
  console.log(`server running at http://localhost:3000`);
});
