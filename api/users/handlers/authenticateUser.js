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
            return h.response( await token.generateToken(user)).code(201);
        }
    }

};