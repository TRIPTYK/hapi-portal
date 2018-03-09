const User = require('../models/user');
const Boom = require('boom');
const token = require('../../../utilities/jwt');
module.exports = async (request, h) => {
    const payload = request.payload;
    const user = await User.findByEmail(payload.email);
    if (!user) {
        return Boom.notFound('Email address is not registered');
    } else {
        const isValidPassword = await user.comparePassword(payload.password);
        if (!isValidPassword) {
            return Boom.notFound('Password is not valid');
        } else {
            let options = {
                sub: {
                    _id: user.id,
                    email: user.email,
                    scope: user.scopes.map(scope => scope.name)
                },
                secret:process.env.SECRET_KEY,
                algorithm:'HS512',
                expiration:'300s'
            }
            return h.response(await token.generateToken(options)).code(201);
        }
    }

};