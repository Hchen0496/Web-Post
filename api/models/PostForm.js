const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

// Schema named Post
const PostForm = new Schema ({
    titleOfPost: String,
    ProfileName: {
        type: String,
        ref: 'Gamer',
        required: true,
    },
    like: Number,
    dislike: Number,
    comments: {
        text: String,
        ref: 'Text',
    },
    DateofPost: Date,   
});

module.exports = mongoose.model('Post', PostForm);