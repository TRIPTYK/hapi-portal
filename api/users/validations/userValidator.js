const Joi = require('joi');

module.exports = {
    options: {
        stripUnknown: true,
        //if you want to wait for all errors just go for true  on abortEarly otherwise it will stop on each error JOI foounds
        // abortEarly:false,
    },
    payload: {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().label('Email address'),
        password: Joi.string().min(6).required().label('Password')
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