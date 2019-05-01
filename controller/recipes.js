const Recipe = require('../models/Recipe')

module.exports = {
//INDEX recipes
  async getRecipes(req, res, next){
    let recipes = await Recipe.find({});
    res.render('recipes/index', {recipes});
  },
//NEW recipe
  newRecipe(req, res, next){
    res.render('recipes/new');
},
//CREATE recipe
async createRecipe(req, res, next){
    //use req.body to create new recipe
   let recipe = await Recipe.create(req.body);
    res.redirect(`/recipes/${recipe.id}`);
}
}