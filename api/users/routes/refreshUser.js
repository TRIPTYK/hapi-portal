const handler = require('../handlers/refreshUser');
// const validator = require('../validations/userValidator');
//This variable brings the end of the route to our constitued route
const localRoute = 'users/refresh';
module.exports = {
    method: 'POST',
    path: `/${process.env.API_ROUTE}/${process.env.API_POSTFIX}/${localRoute}`,
    options: {
        handler: handler,
        // validate:validator,
        auth:{
            scope:'user'
        }
    }
};
