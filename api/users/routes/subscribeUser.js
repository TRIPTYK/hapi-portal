const handler = require('../handlers/subscribeUser');
const validator = require('../validations/userValidator');
//This variable brings the end of the route to our constitued route
const localRoute = 'users/subscribe';
module.exports = {
    method: 'POST',
    path: `/${process.env.API_ROUTE}/${process.env.API_POSTFIX}/${localRoute}`,
    options: {
        handler: handler,
        validate:validator,
        auth:false
    }
}
