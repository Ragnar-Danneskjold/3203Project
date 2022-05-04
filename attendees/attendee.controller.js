//Handle routes for the User
const express = require('express');
const router = express.Router();
const attendeeService = require('./attendee.service');

// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

//Fix
function register(req, res, next) {
    attendeeService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    attendeeService.getAll()
        .then(items => res.json(items))
        .catch(err => next(err));
}

function getById(req, res, next) {
    attendeeService.getById(req.params.id)
        .then(item => item ? res.json(item) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    attendeeService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    attendeeService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}