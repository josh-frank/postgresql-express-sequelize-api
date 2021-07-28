const postsController = require( "../controllers" ).posts;

module.exports = app => {
    app.get( "/posts/:postId", postsController.show );
};
