const jwt = require('jsonwebtoken');
const { promisify } = require('es6-promisify');
const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);

/**
 * This function generates a token based on the user find in the database and the returns it after coding the token
 * @param {User} user - th user to add in the JWT signed token
 * @returns {string} JWT token that will be used by the auhtorization mechanism
 */
//TODO intreoduct options managament for a better integrations, change function signature to pass the sub instaed of the user bring tyhis to be more generic
exports.generateToken = async user => {
    return await sign({
        sub: {
            _id: user.id,
            email: user.email,
            scope:user.scopes.map(scope=>scope.name)
        }
    },
    process.env.SECRET_KEY,
    {
        algorithm: 'HS512',
        expiresIn: '300s'
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