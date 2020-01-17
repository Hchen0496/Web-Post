const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local'); 

const Gamer = require('../models/GamerAccount');

function passwordMatch(submitPassword,storedHashedPassword) {
    return bcrypt.compareSync(submitPassword,storedHashedPassword);
}

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    },
    function(username, password, done) {
       User.findOne({ username: username }, function(err, user) {
       if (err) { return done(err); }
        if (!user)
        {
            console.log('\n\nFailed Login: user does not exist\n\n');
            return done(null, false, { message: 'Incorrect username.' });
        }

            if(passwordMatch(password, user.passwordHash) === false) {
                console.log('\n\nFailed Login: passwords did not match\n\n');
                return done(null, false, {message: 'Successfully Logged In!'});
            }
       
                console.log('\n\nSuccessful Login\n\n');
               return done(null, user, { message: 'Successfully Logged In!.' });
            })
       .catch(err => {return done(err)});
    })
 );

 passport.serializeUser((user,done)=> {
     done(null, user.id);
 });

 passport.deserializeUser((user,done) => {
     Gamer.findById(id)
        .then((user) => {
            if(!user) {
                done(null, false);
                return;
            }
            done(null,user);
            return;
        })
        .catch(err => done(err,null));
 });

 passport.isAuthenticated = () =>
  (req, res, next) => (
    req.user ? next() : res.sendStatus(401)
  );

module.exports = passport;


