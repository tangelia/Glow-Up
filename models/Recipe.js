const mongoose = require('mongoose');
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    category: String,
    title: String,
    image: [ { url: String, public_id: String } ],
    description: String,
    preptime: String,
    ingredients:[{String}],
    directions: String,
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
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
