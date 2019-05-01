const Recipe = require('../models/Recipe')

module.exports = {
  async getRecipes(req, res, next){
    let recipes = await Recipe.find({});
    res.render('recipes/index', {recipes});
  }

}