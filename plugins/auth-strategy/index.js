const HapiNowAuth = require('@now-ims/hapi-now-auth');
exports.register = async (server, options) => {
    await server.register(HapiNowAuth);
    server.auth.strategy('jwt-strategy', 'hapi-now-auth', {
        verifyJWT: true,
        keychain: ['secret'],
        validate: async (request, token, h) => {
            const credentials = token.decodedJWT;
            console.log(credentials);
        }
    });
    server.auth.default('jwt-strategy');
};

exports.name = 'auth-strategy';
//on peut tester avec 
//secret 'secret' et JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWQiOjEsImFkbWluIjp0cnVlfQ.RiBQaXCXCwSPwx2B3rsm_Um193HaH55HkyH1uX24UM4
