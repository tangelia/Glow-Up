const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');

const NewUserSchema = require('../models/user.js')
const Recipe = require("../models/Recipes")
const User = require("../models/User");

router.get('/', (req, res) => {
    userNotLoggedIn = true;
    console.log("im loading indexUser")
    res.render('index', {
        userNotLoggedIn
    });
})

//===================================
// CREATE NEW USER
//===================================
router.post('/', (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    User.findOne({"email": userEmail}).then((user) => {
        if (user === null) {
            const newUser = new NewUserSchema(req.body);
            newUser.save()
                    .then((user) => {
                        res.render(`users/show`, { 
                            user,
                     } );
                    })
                    .catch((error) => {
                        console.log('Error saving new user to database!');
                        console.log(error);
                    });
        } else {
            res.render('login', {
                errorMessage: `User already exists. Please log in`
            });
        }

    })
});

router.get('/about', (req, res) => {
    userNotLoggedIn = true;
    res.render('about', {
        userNotLoggedIn
    });
})

router.get('/login', (req, res) => {
    userNotLoggedIn = true;
    res.render('login', {
        userNotLoggedIn
    });
})

router.put('/login-submit', (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  console.log(`Email: ${userEmail}`);
  console.log(`Password: ${userPassword}`)

 User.findOne({"email": userEmail}).then((user) => {
    console.log(`This user's object: ${user}`);
    console.log(`This user's password: ${user.password}`);
    arrayOfRecipes = user.recipes;
        if (user.password === req.body.password) {
            res.render('recipes/index', {
                userId: user._id,
                user, 
                arrayOfRecipes,
            })
        } else {
            userNotLoggedIn = true;
            res.render('login', {
                userNotLoggedIn,
                errorMessage: `Incorrect Password`
            })
        } 
    })
    .catch((error) => {
                userNotLoggedIn = true;
                res.render('login', {
                userNotLoggedIn,
                errorMessage: `Email Address does not exist`
  });
    
  })
});


router.get('/:userName', (req, res) => {
    const userName = req.params.userName;
    User.findOne({"user_name": userName})
    .then((user) => {
        userNotLoggedIn = true;
        res.render('dashboard/show', {
            user,
            userNotLoggedIn,
            dashboardHeader: `${user.first_name} ${user.last_name}'s Dashboard`
    })
        }).catch((err) => {
        res.send(`User does not exist`);
    })
})

module.exports = router;