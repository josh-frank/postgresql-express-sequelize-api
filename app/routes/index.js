const { verifySignUp } = require( "../middleware" );
const authController = require( "../controllers" ).auth;
const listenForAuthRoutes = require( "../routes/authRoutes" );
const postsController = require( "../controllers" ).posts;
const usersController = require( "../controllers" ).users;
const listenForUserRoutes = require( "../routes/userRoutes" );

module.exports = app => {
    listenForAuthRoutes( app );
    listenForUserRoutes( app );
    // Post routes //
    app.get( "/posts/:postId", postsController.show );
};