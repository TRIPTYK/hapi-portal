const handler = require('../handlers/subscribeUser')
module.exports = {
    method: 'POST',
    path: '/api/users/subscribe',
    options: {
        handler: handler
        // validate: {
        //     payload: {},
        //     failAction: (request, h, error) => {
        //         console.log(error.source) // --> logs "payload"
        //     }
        // }
    }
}
