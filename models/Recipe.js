const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    
    title: String,
    image: String,
    description: String,
    ingredients:String,
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


module.exports = mongoose.model('Recipe', RecipeSchema)