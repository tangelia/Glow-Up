const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ReviewSchema = new Schema({

    body: String,
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

})

/*
Id: ObjectID()
Body:"string"
author: ObjectId ref User
created: Date.now()
*/

module.exports = mongoose.model('Review', ReviewSchema)

