const Scope = require('../models/authScope');
module.exports = async (request, h) => {
    return Scope.serialize(await Scope.find());
};