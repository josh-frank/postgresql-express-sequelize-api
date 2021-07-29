const Post = require('../models').Post;

exports.show = ( request, response ) => {
    return Post.findByPk( request.params.postId, {} )
    .then( post => {
        if ( !post ) { response.status( 404 ).send( { error: "Post not found" } ); }
        else { response.status( 200 ).send( post ); }
    } )
    .catch( error => response.status( 400 ).send( error ) );
}

exports.create = async ( request, response ) => {
    return await Post.create( {
        title: request.body.title,
        content: request.body.content,
        userId: request.userId
    }, {} )
        .then( newPost => Post.findByPk( newPost.id, {} )
            .then( newPost => response.status( 201 ).send( newPost ) )
            .catch( error => response.status( 400 ).send( error ) )
        );
}
