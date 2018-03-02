const handler = require('../handlers/createAuthScope')
const validator = require('../validations/scopeValidator')
//This variable brings the end of the route to our constitued route
const localRoute = 'scopes';
module.exports = {
    method: 'POST',
    path: `/${process.env.API_ROUTE}/${process.env.API_POSTFIX}/${localRoute}`,
    options: {
        handler: handler,
        validate:validator,
        auth:false
    }
}
