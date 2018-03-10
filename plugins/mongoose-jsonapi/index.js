const JSONAPI = require('jsonapi-serializer');
const JSONAPISERIALIZER = JSONAPI.Serializer;
const JSONAPIDESERIALIZER = JSONAPI.Deserializer;
module.exports = serializerPlugin = (schema, options) => {
    if (!options.name) throw new Error('The serializer plugin requires a name');
    // Normalize Options
    const serializerOptions = options.serializer || {};
    if (!serializerOptions.attributes) {
        serializerOptions.attributes = Object.keys(schema.paths).filter(item => item !== '_id');
    }
    const deserializerOptions = options.deserializer || {};
    if (!deserializerOptions.keyForAttribute) {
        deserializerOptions.keyForAttribute = 'camelCase';
    }

    const Serializer = new JSONAPISERIALIZER(options.name, serializerOptions);
    const Deserializer = new JSONAPIDESERIALIZER(deserializerOptions);

    /**
     * Generate a JSON-API compliant representation of this model.
     * @return {Object}
     */
    // eslint-disable-next-line no-param-reassign
    schema.methods.serialize =  serialize=() => {
        return Serializer.serialize(this);
    };

    /**
  * Serialize a set of data using the model's Serializer.
  * @param  {Model} data An instance of the model or an array of models
  * @return {Object}     JSON-API compliant version of the data
  */
    // eslint-disable-next-line no-param-reassign
    schema.statics.serialize =  serialize = (data) =>{
        return Serializer.serialize(data);
    };

    /**
       * Generate a plain Object from the JSON-API compliant source.
       * @param  {Object} data JSON-API compliant object
       * @return {Promise}     Promise that resolves with normalized data object
       */
    // eslint-disable-next-line no-param-reassign
    schema.statics.deserialize =  deserialize = async (data)=> {
        return await Deserializer.deserialize(data)
    };

}