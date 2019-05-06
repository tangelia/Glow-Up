const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: String,
    image: String,
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }]
})

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema)