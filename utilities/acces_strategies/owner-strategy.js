const Boom = require('boom')

exports.checkOwner = async (request, h) => {
    //ceci n'est qu'un example
    //pour info les info de user et d'authentification sont dans l'objet request.auth
    console.log(request.query)
    if(parseInt(request.query.owner_id)!==3){
        return Boom.unauthorized('Vous n etes pas proprietaire et ne pouvez donc pas utiliser cette ressource');
    }   
    return true;
};  
