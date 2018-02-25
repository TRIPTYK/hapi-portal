const User = require('../models/user');
const Boom = require('boom');
module.exports = async (request,h) => {
    const payload = request.payload;
    let user = await User.findByEmail(payload.email);
    if (user) {
        const error = Boom.conflict('Email is already registered');
        return error;
    }
    const newUser = await new User({
        email: payload.email,
        password: payload.password
    });
    await newUser.hashPassword(payload.password);
    await newUser.save();
    return newUser;
};