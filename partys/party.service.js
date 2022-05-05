//Handle user data and provide functions to the controller
const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Party = db.Party;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Party.find();
}

async function getById(id) {
    return await Party.findById(id);
}

//Not Finished
async function create(partyParam) {
    console.log(partyParam)

    const party = new Party(partyParam);

    // save user
    await party.save();
}

//Not Finished
async function update(id, partyParam) {
    const party = await Party.findById(id);

    // validate
    if (!party) throw 'Party not found';
    if (party.name !== partyParam.name && await Party.findOne({ name: partyParam.name })) {
        throw 'Party Name "' + partyParam.name + '" is already taken';
    }


    // copy userParam properties to user
    Object.assign(party, partyParam);

    await party.save();
}

async function _delete(id) {
    await Party.findByIdAndRemove(id);
}