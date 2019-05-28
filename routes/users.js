
const express = require('express');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');

const User = require("../models/user");

// INDEX
router.get('/', (req, res) => {

  console.log("Your user data");
  User.find().then((users) => {
      console.log("Went to find Users")
      console.log(users);
    const usersWithRecipes = users.filter(user => {
        return user.recipes.length > 0
    })

    userNotLoggedIn = true;
    res.render('users/index', {
        userNotLoggedIn,
        users,
        usersWithRecipes
    });
  })
})


// SHOW
// Create a GET show route "/:id" that renders the users's show page
router.get('/:userId', (req, res) => {
  const userIdToSearchDbFor = req.params.userId
//  res.send(`Your user ID is ${userIdToSearchDbFor}`)

    User.findById(userIdToSearchDbFor)
        .then((user) => {
            console.log(user)
            res.render(
                'users/show',
                { user }
            );
        })
        .catch((error) => {
            console.log(`Error retrieving user with ID of ${userIdToSearchDbFor}`)
        });
});



// UPDATE
 router.put('/:userId', (req, res) => {
    const userIdToUpdate = req.params.userId;
    const infoToUpdate = req.body;
    User.findByIdAndUpdate(userIdToUpdate,infoToUpdate)
    .then((user) => {
            console.log(`User with ID of ${userIdToUpdate} updated!`);
            res.redirect(`/users/${userIdToUpdate}`)
        })
        .catch((error) => {
            console.log(`User with ID of ${userIdToUpdate} failed to update!`)
            console.log(error);
        })
 })



// EDIT
router.get('/:userId/edit', (req, res) => {
    var userId = req.params.userId;

    User.findById(userId)
        .then((user) => {
            res.render('users/edit', { 
                user 
            })
        })
        .catch((error) => {
            console.log(`Error rendering edit form for user with ID of ${userId}`)
        })
});



// DELETE




module.exports = router;