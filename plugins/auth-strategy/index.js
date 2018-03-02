const  Stream = require('buffer');
const hapiAuthJWT2 = require('hapi-auth-jwt2');
const userModel = require('../../api/users/models/user');
const validate = async (decoded) =>{
    let user = await userModel.findByEmail(decoded.sub.email);
    if(user){
        return {
            isValid: true,
            credentials : decoded.sub
        };
    } else{
        return {isValid:false};
    }
}
exports.register = async (server) => {
    await server.register(hapiAuthJWT2);
    server.auth.strategy('jwt', 'jwt', {
        key:Stream.Buffer(process.env.SECRET_KEY),
        validate:validate,
        verifyOptions: { algorithms: [ 'HS512' ] } 
    });
    server.auth.default('jwt');
};

exports.name = 'auth-strategy';
