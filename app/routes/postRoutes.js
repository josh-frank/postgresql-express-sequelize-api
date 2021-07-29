const { authorizeJwt } = require( "../middleware" );
const postsController = require( "../controllers" ).posts;

module.exports = app => {
    app.get( "/posts/:postId", postsController.show );
    app.post( "/posts", [ authorizeJwt.verifyToken ], postsController.create );
};
