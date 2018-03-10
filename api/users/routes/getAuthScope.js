const handler = require('../handlers/getAuthScopes')
//This variable brings the end of the route to our constitued route
const localRoute = 'scopes';
module.exports = {
    method: 'GET',
    path: `/${process.env.API_ROUTE}/${process.env.API_POSTFIX}/${localRoute}`,
    options: {
        handler: handler,
        auth:false
    }
}
