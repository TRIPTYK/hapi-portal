const mongoose = require('mongoose');
const jsonapi = require("../../../plugins/mongoose-jsonapi")
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: true
    }
});
schema.plugin(jsonapi,{'name':'authScope'})

/** 
 * Model Methods (Statics)
*/

module.exports = mongoose.model('authScope', schema)
