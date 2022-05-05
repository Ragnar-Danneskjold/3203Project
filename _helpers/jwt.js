var { expressjwt: expressjwt } = require("express-jwt");
const config = require('config.json');
const userService = require('../users/user.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressjwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register',
            '/',
            '/register',
            '/home',
            '/items',
            '/locationChange',
            '/guests',
            '/yourParties',
            '/invitedParties',
            '/planNewParty',
            '/singleParty',
            '/partys/register',
            '/show'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};
