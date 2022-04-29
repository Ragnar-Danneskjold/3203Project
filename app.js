// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/home-page-layout')
app.set('view engine', 'ejs')

// Routes
app.get('', (req, res) => {
    res.render('index', { title: 'Home Page'})
})



app.get('/items', (req, res) => {
    res.render('items', {
        title: 'Items page', layout: './layouts/home-page-layout'})
})

app.get('/locationChange', (req, res) => {
    res.render('locationChange', {
        title: 'Location Change Page', layout: './layouts/home-page-layout'
    })
})

app.get('/guests', (req, res) => {
    res.render('guests', {
        title: 'Guests Page', layout: './layouts/home-page-layout'
    })
})

app.get('/yourParties', (req, res) => {
    res.render('yourParties', {
        title: 'Your Parties Page', layout: './layouts/home-page-layout'
    })
})

app.get('/invitedParties', (req, res) => {
    res.render('invitedParties', {
        title: 'Parties You Are Invited To', layout: './layouts/home-page-layout'
    })
})

app.get('/planNewParty', (req, res) => {
    res.render('planNewParty', {
        title: 'Plan Your Next Party', layout: './layouts/home-page-layout'
    })
})

app.get('/singleParty', (req, res) => {
    res.render('singleParty', {
        title: 'Party Overview', layout: './layouts/home-page-layout'
    })
})


// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))