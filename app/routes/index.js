const postsController = require( "../controllers" ).posts;
const usersController = require( "../controllers" ).users;

module.exports = app => {
    // Post routes //
    app.get( "/posts/:postId", postsController.show );
    // User routes //
    app.get( "/users/:userId", usersController.show );
};
