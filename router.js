//router to handle front end routing
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('User');

// Routes
app.get('', (req, res) => {
    res.render('index', { title: 'Home Page'})
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page', layout: './layouts/sidebar' })
})

// Showing home page
router.get("/", function (req, res) {
  res.render("home");
});

module.exports = router;
