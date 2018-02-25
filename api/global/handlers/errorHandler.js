const Boom = require('boom');
module.exports = async (request, h) => {
    if(request.raw.req.headers.accept &&  request.raw.req.headers.accept.match(/json/))
    {
        return Boom.notFound('The API Url you are looking for doesn\'t exist !!!!');
    } else {
        return '<pre>The  Url you are looking for doesn\'t exist !!!</pre>';
    }
    console.log(request.raw.req.headers);
   
}