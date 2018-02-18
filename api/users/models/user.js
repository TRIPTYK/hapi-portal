const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Bcrypt = require('bcrypt');
const Boom = require('boom');
const schema = new Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


/** 
 * Model Methods (Statics)
*/
schema.statics.findByEmail = async function (email) {
    return await this.findOne({ email })
}

schema.statics.hashPassword = async function (password) {
    try{
        let salt = await Bcrypt.genSalt(parseInt(process.env.SALT_WORK_FACTOR))
        let hash = await Bcrypt.hash(password,salt)
        return hash;
    } catch(e){
        Boom.badRequest('There was an error while hasing your password')
    }
}

module.exports = mongoose.model('User', schema)
