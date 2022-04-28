// Requiring Modules
var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var localStrategy = require("passport-local");
var User = require("./models/userDetails"); //THIS IS WHERE MODEL IS DEFIINED FOR USERS
var session = require('express-session');
var routes = require('./routes/router'); //Define location for routes

//Setup MongoDB Atlas
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://ItsToast:Archie2022!@upartycluster.eh8jq.mongodb.net/UPartyDB?retryWrites=true&w=majority");

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Set up session
app.use(
  session({
    secret: "test",
    resave: false,
    saveUninitialized: true,
  })
);

// Set up passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(
  function(username, password, done) {
    User.findOne({ username: username}, function (err, user) {
      if (err) {return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    })
  }
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(routes);

const PORT = process.env.PORT || 3000;

// Set up express server
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
