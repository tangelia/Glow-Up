const Recipe = require('../models/Recipe')

module.exports = {
//INDEX recipes
  async recipeIndex(req, res, next){
    let recipes = await Recipe.find({});
    res.render('recipes/index', {recipes});
  },
//NEW recipe
  recipeNew(req, res, next){
    res.render('recipes/new');
},
//CREATE recipe
async recipeCreate(req, res, next){
    //use req.body to create new recipe
   let recipe = await Recipe.create(req.body.post);
    res.redirect(`/recipes/${recipe._id}`);
},

//SHOW recipe
async recipeShow(req, res, next){
   let recipe = await Recipe.findById(req.params.id);
    res.render('recipes/show', {recipe});
},
//EDIT recipe
async recipeEdit(req, res, next){
    let recipe = await Recipe.findById(req.params.id);
     res.render('recipes/edit', {recipe});

},
//Update recipe
async recipeUpdate(req, res, next){
    let recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body.post);
     res.redirect(`/recipes/${recipe._id}`);
}
}