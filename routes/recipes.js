//======================
// REQUIREMENTS
//======================
const express = require('express');
const router = express.Router({mergeParams: true}); 
const mongoose = require('mongoose');


var Recipe = require("../models/recipe")
var User = require("../models/user");
var Link = require("../models/link")


//======================
// NEW recipe FORM
//======================

router.get('/new', (req, res) => {
  const userId = req.params.userId;
  res.render(
    'recipes/new', {
      userId
    }
  );
})

//============================
// NEW recipe CREATE ROUTE
//============================

router.post('/', (req, res) => {
    const userId = req.params.userId;
    const newRecipeInfo = req.body;

    User.findById(userId).then((user) => {
      const newRecipe = new Recipe(newRecipeInfo);
      newRecipe.links = [];
      for (var i = 0; i < req.body.linkUrl.length; i++) {
        var newLinkUrl = req.body.linkUrl[i];
        var newLinkDescription = req.body.linkDescription[i];
        var newLink = new Link({
          url: newLinkUrl,
          description: newLinkDescription
        })
        newRecipe.links.push(newLink);
    }
    user.recipes.push(newRecipe);

      return user.save();
      }).then((user) => {
        res.redirect(`/users/${user.id}/recipes`)
      })
    })


//======================
// EDIT
//======================

router.get('/:recipeId/edit', (req, res) => {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;
  console.log("requested edit page");
  // res.send(`Your user ID is ${userIdToSearchDbFor}`)
  User.findById(userId)
    .then((user) => {
      var foundRecipe = user.recipes.find((recipe) => {
        return recipe.id === recipeId;
      })
      var arrayOfLinks = [];
      for (var i =0; i < foundRecipe.links.length; i++) {
          arrayOfLinks.push(foundRecipe.links.url);
      }
      var length = arrayOfLinks.length

      res.render('recipes/edit', {
        user,
        userId, 
        recipe: foundRecipe, 
        links: foundRecipe.links,
        arrayOfLinks,
        length
      })
});
});


//======================
// SHOW Recipe
//======================

router.get('/:recipeId', (req, res) => {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;

    User.findById(userId)
      .then((user) => {
        var foundRecipe = user.recipes.find((recipe) => {
          return recipe.id === recipeId;
        })

        res.render('recipes/show', {
          userId, 
          recipe: foundRecipe
        })
  });
});

//======================
// UPDATE
//======================

router.put('/:recipeId', (req, res) => {
  const recipeId = req.params.recipeId;
  const userId = req.params.userId;
  var arrayOfRecipes = [];
 User.findById(userId).then((user) => {
    const foundRecipe = user.recipes.find((recipe) => {
      return recipe.id === recipeId;
    });
    arrayOfRecipes = user.recipes;
    foundRecipe.name = req.body.name;
    foundRecipe.user_name = req.body.user_name;
    foundRecipe.description = req.body.description;
    foundRecipe.imageUrl = req.body.imageUrl;
    // console.log("Before:")
    // console.log(foundRecipe.links);
    foundRecipe.links = [];
    // console.log("After:");
    // console.log(foundRecipe.links);
    for (var i = 0; i < req.body.linkUrl.length; i++) {
      // console.log("Add another link")
      var newLinkUrl = req.body.linkUrl[i];
      var newLinkDescription = req.body.linkDescription[i];
      var newLink = new Link({
        url: newLinkUrl,
        description: newLinkDescription
      })
      // console.log(newLink);
      foundRecipe.links.push(newLink);
    }
    // console.log(foundRecipe.links);


    // foundRecipe.links.link.url = req.body.link.url
    // foundRecipe.links.push(req.body.links);

    // then save the user and return the promise so we can chain
    // another .then() block and only use one .catch() block
    return user.save();

  }).then((user) => {
    // console.log(`updated user with ID of ${user._id}`);
    res.render('recipes/index', {
          userId: user._id,
          user,
          arrayOfRecipes,
          links: user.recipes.links
        }
    )
  }).catch((error) => {
    console.log(`Failed to update recipe with ID of ${recipeId}`);
    console.log(error);
  });
});


//======================
// INDEX
//======================


router.get('/', (req, res) => {
  var userId = req.params.userId;
  User.findById(userId)
      .then((user) => {
        var arrayOfRecipes = user.recipes;
        // console.log(arrayOfRecipes);
        res.render('recipes/index', {
          userId,
          user,
          arrayOfRecipes,
        })
        })
      });

//======================
// DELETE
//======================
router.get('/:recipeId/delete', (req, res) => {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;
  var arrayOfRecipes = [];
  User.findById(userId)
    .then((user) => {
      arrayOfRecipes = user.recipes;
      
      user.recipes.id(recipeId).remove();
      
      return user.save();
    })
    .then((user) => {
      res.render(
        'recipes/index',
        {
          userId: user._id,
          user,
          arrayOfRecipes
        }
    )
  }).catch((error) => {
    console.log(`Failed to delete user with ID of ${userId}`);
    console.log(error);
  });
});



//======================
// EXPORTS
//======================
module.exports = router;










// let express = require('express')
// let router = express.Router()
// const {errorHandler} = require('../middleware')
// const {recipeIndex, 
//        recipeNew,
//        recipeCreate,
//        recipeShow,
//        recipeEdit,
//        recipeUpdate,
//        recipeDelete } = require('../controller/recipes')

// //GET post index /recipes
// router.get('/', errorHandler(recipeIndex));

// //GET new  /recipes/new
// router.get('/new', recipeNew);

// //POST create /recipes
// router.post('/', errorHandler(recipeCreate));


// //GET show /recipes/:id
// router.get('/:id',errorHandler(recipeShow));

// //GET edit /recipes/:id/edit
// router.get('/:id/edit',errorHandler(recipeEdit));

// //PUT update  /recipes/:id
// router.put('/:id',errorHandler(recipeUpdate));

// //DELETE delete /recipes/:id
// router.delete('/:id', errorHandler(recipeDelete));
    



// module.exports = router