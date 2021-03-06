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
   let recipe = await Recipe.create(req.body);
    res.redirect('/recipes');
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
    let recipe = await Recipe.findByIdAndUpdate(req.params.recipeId, req.body);
     res.redirect('/recipes');
},
//DELETE recipe
async recipeDelete(req, res, next){
    let recipe = await Recipe.findByIdAndRemove(req.params.recipeId);
     res.redirect('/recipes');
}
}