const config = require("./config");
const Auth0Strategy = require("passport-auth0");

module.exports = new Auth0Strategy(
    {
    domain: config.domain,
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: '/login'
    }, 
function(accessToken, refreshToken, extraParams, profile, done) {

    console.log(1);

    //the login request uses this strategy to hit auth0 and it gives the clientID and secret.
    return done(null, profile);
    }
);