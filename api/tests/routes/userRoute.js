const handler = require('../handlers/userHAndler');
//This variable brings the end of the route to our constitued route
const localRoute = 'tests/user';
module.exports = {
    method: 'GET',
    path: `/${process.env.API_ROUTE}/${process.env.API_POSTFIX}/${localRoute}`,
    options: {
        handler: handler,
        // validate:validator,
        auth:{
            scope :'admin'
        }
    }
};
