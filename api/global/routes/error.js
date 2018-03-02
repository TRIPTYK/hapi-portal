const handler = require('../handlers/errorHandler');
module.exports = {
    method: ['POST','GET','PATCH','PUT','DEL'],
    path: '/{any*}',
    options: {
        handler: handler
    }
};
