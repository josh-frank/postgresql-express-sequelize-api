const listenForAuthRoutes = require( "../routes/authRoutes" );
const listenForPostRoutes = require( "../routes/postRoutes" );
const listenForUserRoutes = require( "../routes/userRoutes" );

module.exports = app => {
    listenForAuthRoutes( app );
    listenForPostRoutes( app );
    listenForUserRoutes( app );
};
