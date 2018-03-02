const Joi = require('joi');

module.exports = {
    options: {
        stripUnknown: true,
        //if you want to wait for all errors just go for true  on abortEarly otherwise it will stop on each error JOI foounds
        // abortEarly:false,
    },
    payload: {
        name: Joi.string().required().label('Auth Scope name '),
    },
    // params:{
    //     //params validation JOI Object
    // },
    // query:{
    //     //query validation JOI Object
    // },
    failAction: async (req, h, err) => {
        return err;
    }
};