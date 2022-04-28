//DB wrapper for all in one db access. load all models here
const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);

//Export all models here
module.exports = {
    User: require('../users/user.model')
};