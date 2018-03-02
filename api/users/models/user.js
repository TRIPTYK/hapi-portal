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
    },
    scopes:[
        { type: Schema.Types.ObjectId, ref: 'authScope'}
    ]
});


/** 
 * Model Methods (Statics)
*/
schema.statics.findByEmail = async function (email) {
    return await this.findOne({ email }).populate('scopes');
};

schema.methods.hashPassword = async function (password) {
    try{
        let salt = await Bcrypt.genSalt(parseInt(process.env.SALT_WORK_FACTOR));
        let hash = await Bcrypt.hash(password,salt);
        this.password=hash;
    } catch(e){
        Boom.badRequest('There was an error while hasing your password');
    }
};

schema.methods.comparePassword = async function(tryPassword){
    try{
        let isMatch = await Bcrypt.compare(tryPassword,this.password);
        if(isMatch){
            return this;
        }
        return Boom.badRequest('The entered password is not correct');
    }catch(err){
        throw(err);
    }

   
}
module.exports = mongoose.model('User', schema)
