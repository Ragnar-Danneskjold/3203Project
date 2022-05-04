//Handle user data and provide functions to the controller
const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Attendee = db.Attendee;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Attendee.find();
}

async function getById(id) {
    return await Attendee.findById(id);
}

//Not Finished
async function create(attendeeParam) {
    // validate
    if (await Attendee.findOne({ name: attendeeParam.name })) {
        throw 'Attendee Name "' + attendeeParam.name + '" is already taken';
    }

    const Attendee = new Attendee(attendeeParam);

    // save user
    await Attendee.save();
}

//Not Finished
async function update(id, attendeeParam) {
    const attendee = await Attendee.findById(id);

    // validate
    if (!attendee) throw 'Attendee not found';
    if (attendee.name !== attendeeParam.name && await Attendee.findOne({ name: attendeeParam.name })) {
        throw 'Attendee Name "' + attendeeParam.name + '" is already taken';
    }


    // copy userParam properties to user
    Object.assign(attendee, attendeeParam);

    await attendee.save();
}

async function _delete(id) {
    await Attendee.findByIdAndRemove(id);
}