const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const GameSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: Number,
    },
    genre: {
        type: String,
        required: true, 
    },
    rating: {
        type: String,
        default: 'Unrated',
    },
    developers: {
        type:String,
        unique: true, 
    }
});

module.exports = mongoose.model('Game', GameSchema);