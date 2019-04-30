const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    Id: ObjectID(),
    category: String,
    title: String,
    img: String,
    description: String,
    preptime: String,
    ingredients:[{String}],
    directions: String,
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    created:Date.now(),
    reviews:[{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
})


/*
Id: ObjectID()
category: "string"
Title:"string"
img:"string"
description: "string"
ingredients: array of objects
prep time:"string"
directions:"string"
created: Date.now()
author:OjectID pointing to user-ID
reviews: array of objects referencing Reviews
*/
module.exports = mongoose.model('Recipe', RecipeSchema)
