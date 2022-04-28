const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
require('dotenv').config();

// Setting up the schema
const Party = new mongoose.Schema({
  Id: Number,
  name: String,
});

// Setting up the passport plugin
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('Party', Party);
