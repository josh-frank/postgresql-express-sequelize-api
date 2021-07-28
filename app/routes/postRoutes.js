const postsController = require( "../controllers" ).users;

module.exports = app => {
    app.get( "/posts/:postId", postsController.show );
};
