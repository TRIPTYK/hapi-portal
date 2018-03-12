/**
 * This function is an utility for validating the fact that the request is a jsonapi request or a normal rest request
 * @param {*} request from a route
 * @returns {Boolean} Boolean that indicates if the request is a jsonapi request or a normal REST Request
 */
exports.checkJSONAPI = (request)=>{
    return (request.headers['content-type']==='application/vnd.api+json' || request.headers.Accept ==='application/vnd.api+json');
};