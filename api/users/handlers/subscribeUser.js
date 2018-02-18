const User = require('../models/user')
module.exports = async (request, h) => {
    console.log(request.payload)
    let hash= await User.hashPassword(request.payload.password);

     return hash;

}