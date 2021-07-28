const User = require( "../models" ).User;

const checkForDuplicateUsername = ( request, response, next ) => {
  User.findOne( { where: { username: request.body.username } } ).then( user => {
    if ( user ) {
      response.status( 400 ).send( { error: "Username already taken" } );
      return;
    }
    next();
  } );
}

module.exports = { checkForDuplicateUsername };
