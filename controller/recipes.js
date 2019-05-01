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
}
}