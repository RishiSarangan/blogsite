//jshint esversion:6
//general initialisations
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const { update } = require("lodash");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
mongoose.connect("mongodb://localhost:27017/blogDB");
const findOrCreate = require('mongoose-findorcreate');
const session = require('express-session');

//app.use area
app.use(cors());
app.use(express.json());

//passport stuff
app.use(session({
  secret: "Sarangan",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
//passport user schema
const userSchema = new mongoose.Schema ({
  email: String,
  password: String,
  googleId: String,
  secret: String
});
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);

    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"] })
);

app.get("/auth/google/secrets",
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect to secrets.
    res.redirect("/secrets");
  });

app.get("/login", function(req, res){
    res.render("login");
  });
  
app.get("/register", function(req, res){
    res.render("register");
  });

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
  });

  app.post("/register", function(req, res){

    User.register({username: req.body.username}, req.body.password, function(err, user){
      if (err) {
        console.log(err);
        res.send("User Already exists!");
      } else {
        passport.authenticate("local")(req, res, function(){
          res.send("registered");
        });
      }
    });
  
  });
  
  app.post("/login", function(req, res){
  
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });
  
    req.login(user, function(err){
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, function(){
          res.send("logged in");
        });
      }
    });
  
  });
  
  //BLOG STUFF BEGINS HERE
//schema creation
const blogSchema = new mongoose.Schema({
  title: String,
  post: String
})

//model creation
const post_model = mongoose.model("blog",blogSchema);

app.post("/compose", (req,res) => {
  let reactData = req.body;
  //saving to database
  const newPost = new post_model({
      title : reactData.title,
      post: reactData.post
  })
  newPost.save();
  //telling React that we have recieved it 
  res.send("Recieved");
});

app.get("/compose", (req,res) => {
  post_model.find(function(err,posts){
    if(err){
      console.log(err);
    }
    else{
      console.log("get called ");
      res.send(posts);
    }
  })
})

app.post("/update", (req,res) => {
  let reactData = req.body;
  //updating the database
  post_model.updateOne({title: reactData.title}, {title: reactData.title, post:reactData.post},function(err){
    if(err)
      console.log(err);
  })
  //telling React that we have recieved it 
  res.send("Recieved Update");
});

app.post("/delete", (req,res) => {
  let delete_id = req.body.id;
  post_model.deleteOne({_id: delete_id})
        .then(function(){
            console.log("Task has been deleted from the database successfully");
        })
  res.send("Delete ID recieved ");
})

//server to listen
app.listen(3001, function() {
    console.log("Server started on port 3001");
  });
  