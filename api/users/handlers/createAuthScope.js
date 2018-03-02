const Scope = require('../models/authScope');
module.exports = async (request, h) => {
    let scope = await new Scope(request.payload);
    await scope.save();
    return {'message':'Scope succesfully created'};
};