//Handle user data and provide functions to the controller
const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Item = db.Item;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Item.find();
}

async function getById(id) {
    return await Item.findById(id);
}

//Not Finished
async function create(itemParam) {
    // validate
    if (await Item.findOne({ name: itemParam.name })) {
        throw 'Item Name "' + itemParam.name + '" is already taken';
    }

    const Item = new Item(itemParam);

    // save user
    await party.save();
}

//Not Finished
async function update(id, itemParam) {
    const item = await Item.findById(id);

    // validate
    if (!item) throw 'Item not found';
    if (item.name !== itemParam.name && await Item.findOne({ name: itemParam.name })) {
        throw 'Item Name "' + itemParam.name + '" is already taken';
    }


    // copy userParam properties to user
    Object.assign(item, itemParam);

    await item.save();
}

async function _delete(id) {
    await Item.findByIdAndRemove(id);
}