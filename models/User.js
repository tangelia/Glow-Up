const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: String,
    imgage: String,
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }]
})

UserSchema.plugin(passportLocalMongoose);

/*
Name: "string"
Username:"string"
profile_img:"string"
email: "string"
password: Hash from Passport
recipes: array of objects referencing Recipes
*/
module.exports = mongoose.model('User', UserSchema)