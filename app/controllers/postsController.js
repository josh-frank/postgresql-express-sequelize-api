const Post = require('../models').Post;

exports.show = ( request, response ) => {
    return Post.findByPk( request.params.postId, {} )
        .then( post => {
            if ( !post ) { response.status( 404 ).send( { error: "Post not found" } ); }
            else { response.status( 200 ).send( post ); }
        } )
        .catch( error => response.status( 400 ).send( error ) );
}