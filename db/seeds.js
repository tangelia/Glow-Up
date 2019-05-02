let Recipe = require('../models/Recipe.js')

let newRecipes = [

    {
        category: "Hair",
        title: String,
        image: [ { url: String, public_id: String } ],
        description: String,
        preptime: String,
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
    },
    {
        category: "Body",
        title: String,
        image: [ { url: String, public_id: String } ],
        description: String,
        preptime: String,
        ingredients:String,
        directions: "Combine in a small bottle, dark glass preferred (this helps it keep its potency longer). Shake before use to combine ingredients; separation is natural!",
        author: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        reviews:[{
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }]
    },
    {
        category: "Face",
        title: "Easy Olive Oil Facial Cleanser",
        image: [ { url: String, public_id: String } ],
        description: String,
        preptime: String,
        ingredients:"4 T Cold pressed extra virgin olive oil (approx. 2 oz), 2 tsp raw honey (can substitute vegetable glycerin), 20 drops sweet orange essential oil",

        directions: "Combine in a small bottle, dark glass preferred (this helps it keep its potency longer). Shake before use to combine ingredients; separation is natural!",,
        author: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        reviews:[{
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }]
    },
    
    {
        category: "Make-up",
        title: "Easy DIY Natural Makeup Remover with Jojoba Oil",
        image: [ { url: String, public_id: String } ],
        description: "An easy DIY all-natural makeup remover",
        preptime: "5 minutes",
        ingredients:"2 oz jojoba oil, Non-GMO Vitamin E oil – either in capsule or dropper form, 4 drops lavender essential oil (optional)",
        directions: "In a dark glass jar (this helps preserve potency by protecting ingredients from light) combine the jojoba oil, the vitamin E oil, and the rose essential oil. If using a capsule of Vitamin E, simply use a clean pin or knife tip to perforate a small hole in the capsule and squeeze liquid into jar. Shake jar to combine ingredients.

        When you’re ready to use, give the bottle shake, then gently massage about a quarter-to-a-half teaspoon of the mixture over your face. Wipe away with a clean cotton pad and see all that makeup come clean off!
        
        If you avoid getting water in the container, this natural makeup remover will last up to year.",
        author: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        reviews:[{
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }]
    },
    {
        category: "Bath",
        title: String,
        image: [ { url: String, public_id: String } ],
        description: String,
        preptime: String,
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
    },
    {
        category: "Home",
        title: String,
        image: [ { url: String, public_id: String } ],
        description: String,
        preptime: String,
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
    },



















]
Recipe.remove({})
.then(Recipe.create(newRecipes))
.then(recipes => {
  console.log('Saved Recipes', recipes)
})