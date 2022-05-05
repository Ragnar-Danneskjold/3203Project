//router to handle front end routing
const express = require('express');
const router = express.Router();
const partyService = require('./partys/party.service');


// Routes
router.get('', (req, res) => {
  res.render('login', { title: 'Login'})
})

router.get('/register', (req, res) => {
  res.render('register', { title: 'Register'})
})

// Routes
router.get('/home', (req, res) => {
  res.render('index', { title: 'Home Page'})
})

router.get('/show', (req, res, next) => {
  partyService.find((err, response) => {
    res.json(response);
  });
});

router.get('/items', (req, res) => {
  res.render('items', {
      title: 'Items page', layout: './layouts/home-page-layout'})
})

router.get('/locationChange', (req, res) => {
  res.render('locationChange', {
      title: 'Location Change Page', layout: './layouts/home-page-layout'
  })
})

router.get('/guests', (req, res) => {
  res.render('guests', {
      title: 'Guests Page', layout: './layouts/home-page-layout'
  })
})

router.get('/yourParties', (req, res) => {
  res.render('yourParties', {
      title: 'Your Parties Page', layout: './layouts/home-page-layout'
  })
})

router.get('/invitedParties', (req, res) => {
  res.render('invitedParties', {
      title: 'Parties You Are Invited To', layout: './layouts/home-page-layout'
  })
})

router.get('/planNewParty', (req, res) => {
  res.render('planNewParty', {
      title: 'Plan Your Next Party', layout: './layouts/home-page-layout'
  })
})

router.get('/singleParty', (req, res) => {
  res.render('singleParty', {
      title: 'Party Overview', layout: './layouts/home-page-layout'
  })
})

module.exports = router;
