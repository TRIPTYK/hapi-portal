const User = require('../models/user')
module.exports = async (request, h) => {

    let hash= await User.hashPassword();
     return hash;

}