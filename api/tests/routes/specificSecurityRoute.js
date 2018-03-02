const handler = require('../handlers/specificSecurityHandler');
//This variable brings the end of the route to our constitued route
const localRoute = 'tests/specific_user';
const strategy = require('../../../utilities/acces_strategies/owner-strategy')
module.exports = {
    method: 'GET',
    path: `/${process.env.API_ROUTE}/${process.env.API_POSTFIX}/${localRoute}`,
    options: {
        auth: {
            scope: 'admin',
        },
        pre: [
            { method: strategy.checkOwner }],
        handler: handler,
        // validate:validator,
    }
};
