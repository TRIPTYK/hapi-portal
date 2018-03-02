const User = require('../models/user');
module.exports = async (request, h) => {
    let user = await new User(request.payload);
    await user.hashPassword(request.payload.password);
    await user.save();
    return {'message':'User succesfully created'};
};