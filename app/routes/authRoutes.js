const { verifySignUp } = require( "../middleware" );
const authController = require( "../controllers" ).auth;

module.exports = app => {
    // Auth headers //
    app.use( ( request, response, next ) => {
        response.header( "Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept" );
        next();
    } );
    // Auth routes //
    app.post( "/signup", [ verifySignUp.checkForDuplicateUsername ], authController.signUp );
    app.post( "/signin", authController.signIn );
};