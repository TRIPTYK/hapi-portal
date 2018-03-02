const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: true
    }
});


/** 
 * Model Methods (Statics)
*/

module.exports = mongoose.model('authScope', schema)
