//Handle routes for the User
const express = require('express');
const router = express.Router();
const partyService = require('./party.service');

// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

//Fix
function register(req, res, next) {
    partyService.create(req.body)
        .then(res.redirect('/yourParties'))
        //.catch(err => next(err));
}

function getAll(req, res, next) {
    partyService.getAll()
        .then(partys => res.json(partys))
        .catch(err => next(err));
}

function getById(req, res, next) {
    partyService.getById(req.params.id)
        .then(party => party ? res.json(party) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    partyService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    partyService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}