const token = require('../../../utilities/jwt');
module.exports = async (request, h) => {
   return await token.refreshToken(request.auth.token);
};