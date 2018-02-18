const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Bcrypt = require('bcrypt');
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

schema.statics.hashPassword = async function () {
    try{
        let salt = await Bcrypt.genSalt(parseInt(process.env.SALT_WORK_FACTOR))
        return salt;
    } catch(e){
        console.log(e)
    }
}

//TODO add verifyUniqUser in preSave
module.exports = mongoose.model('User', schema)
