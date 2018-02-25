const jwt = require('jsonwebtoken');
const { promisify } = require('es6-promisify');
const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);
exports.generateToken = async user => {
    return await sign({
        sub: {
            _id: user.id,
            email: user.email,
            scope: ['admin']
        }
    },
    process.env.SECRET_KEY,
    {
        algorithm: 'HS512',
        expiresIn: '30s'
    }
    );
};