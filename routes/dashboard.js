const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');

const NewUserSchema = require('../models/user.js')
const Recipe = require("../models/recipe")
const User = require("../models/user");

router.get('/', (req, res) => {
    userNotLoggedIn = true;
    console.log("im loading indexUser")
    res.render('index', {
        userNotLoggedIn
    });
})


module.exports = router;