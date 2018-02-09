// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
    
        'facebookAuth' : {
            'clientID'      : '164687204175363', // your App ID
            'clientSecret'  : 'b42f522333a50a431c47f2031f196e37', // your App Secret
            'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
            'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
            'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
        },
    
    };