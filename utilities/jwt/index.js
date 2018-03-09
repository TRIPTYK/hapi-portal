const jwt = require('jsonwebtoken');
const { promisify } = require('es6-promisify');
const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);

/**
 * This function generates a token based on the user find in the database and the returns it after coding the token
 * @param {Object} options - the options contains 
 *  - {Object} sub to sign 
 *  - {String} algorithm  to sign
 *  - {String} secret to sign
 *  - {String} expiration time like '3d','5s',...
 * @returns {string} JWT token that will be used by the auhtorization mechanism
 */
//TODO intreoduct options managament for a better integrations, change function signature to pass the sub instaed of the user bring tyhis to be more generic
exports.generateToken = async options => {
    let sub = options.sub || {_id:Math.random()*10000};
    let algorithm = options.algorithm || 'HS256';
    let expiration = options.expiration || '30s';
    let secret = options.secret ||'secret_triptyk_base_2018';
    return await sign({
        sub: sub
    },
    secret,
    {
        algorithm: algorithm,
        expiresIn: expiration
    }
    );
};
/**
 * This function refresh a token based on the old token and the returns the refreshed token after coding the token
 * @param {string} token - the token passed to be refreshed
 * @returns {string} JWT token that is refreshed
 */
//TODO intreoduct options managament for a better integrations
exports.refreshToken = async (token) =>{
    let decodedToken = await verify(token,process.env.SECRET_KEY);
    decodedToken.exp +=30000;
    let refreshToken = await sign(decodedToken,process.env.SECRET_KEY);
    return refreshToken;
};
