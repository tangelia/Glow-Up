const mongoose = require('../db/connection.js')
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ReviewSchema = new Schema({

    comment: String,
    rating: Number,
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

})


module.exports = mongoose.model('Review', ReviewSchema

