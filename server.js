const express = require('express');
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const User = require('./models/user')
// const path =require ('path')



const routes = require('./routes/index');
const recipes = require('./routes/recipes')
const reviews = require('./routes/reviews' )
// const users = require('./routes/users')

// Initialize app
const app = express();


//Middleware
app.use(express.json());

//Set view engine
app.set('view engine', 'hbs');

// app.use(favicon(path.join(__dirname, "/public", "favicon.ico")));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));


//Config passport and session
// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Router
app.use('/', routes);
app.use('/recipes', recipes)
app.use('/recipes/:id/reviews', reviews)
// app.use('/users' users)

// Listener
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Glow up is connected to ${PORT}`);
});

















