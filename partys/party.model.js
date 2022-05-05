//Model for all party docs in mongoDB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    //Hide secret and unneeded items from the api calls
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.location;
    }
});

module.exports = mongoose.model('Party', schema);