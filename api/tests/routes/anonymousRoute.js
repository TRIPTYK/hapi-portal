const handler = require('../handlers/anonymousHandler');
//This variable brings the end of the route to our constitued route
const localRoute = 'tests/anonymous';
module.exports = {
    method: 'GET',
    path: `/${process.env.API_ROUTE}/${process.env.API_POSTFIX}/${localRoute}`,
    options: {
        handler: handler,
        // validate:validator,
        auth:false
    }
};
