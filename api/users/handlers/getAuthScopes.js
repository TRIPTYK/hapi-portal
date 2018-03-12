const Scope = require('../models/authScope');
const JSONAPIUtilites = require('../../../utilities/jsonAPI');
module.exports = async (request, h) => {
    let values = await Scope.find();
    let response = h.response(values);
    if(JSONAPIUtilites.checkJSONAPI(request)){
        response = h.response(Scope.serialize(values)).type('application/vnd.api+json');
    }
    return response;
};