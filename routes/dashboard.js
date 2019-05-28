const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');

const NewUserSchema = require('../models/User.js')
const Recipe = require("../models/Recipe")
const User = require("../models/User");

router.get('/', (req, res) => {
    userNotLoggedIn = true;
    console.log("im loading indexUser")
    res.render('index', {
        userNotLoggedIn
    });
})


module.exports = router;