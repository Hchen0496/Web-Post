const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema; 
const saltRounds = 10;

const CHAR_LIMIT = 8;

// creating gamer schema & model 
const Gamer = new Schema({
    username: {
        type: String,
        required: [true, "Enter username"]
    },
    email: {
       type: String,
       required: [true, "Please Enter email"] 
    },
    firstName: {
        type: String,
        required: [true, "Enter First Name"]
    },
    lastName:  {
        type: String,
        required: [true, "Enter Last Name"]
    },
    
    password: {
        type: String,
        required: [true, "Enter Password"]
    },
    passwordConf: {
        type: String,
        required: [true, "Re-enter Password"]
    }
});

Gamer.methods.isPasswordLong = function(value) {
    if (value.length < CHAR_LIMIT){
        throw new Error('Password is too short');
    }
},

Gamer.pre('save', function(next) {
    var user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err,hash) {
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});

Gamer.methods.comparePasswords = function (password, passwordConf) {
    bcrypt.compare(password, this.passwordConf, function(err,isMatch){
        if(err) return 
    });
}

Gamer.methods.comparePassword = function(userPassword, cb) {
    bcrypt.compare(userPassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null,isMatch);
    })
}

module.exports = mongoose.model('Gamer', Gamer);


