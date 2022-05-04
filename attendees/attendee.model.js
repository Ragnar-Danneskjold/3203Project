//Model for all user docs in mongoDB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    partyId: { type: Number, required: true },
    status: { type: Boolean, required: true },
    itemId: { type: Number, required: false }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    //Hide secret and unneeded items from the api calls
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Attendee', schema);