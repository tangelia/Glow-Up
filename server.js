const express = require('express');
// const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const User = require('./models/User')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const path =require ('path')

require('dotenv').config();

const routes = require('./routes/index.js');
const recipes = require('./routes/recipes.js')
const reviews = require('./routes/reviews.js')
// const users = require('./routes/users')

// Initialize app
const app = express();

//Connect database
// mongoose.connect('mongodb://localhost/Glow-Up', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
console.log('we\'re connected!')
});

const userNotLoggedIn = true;

const logOut = function() {
    userNotLoggedIn = true;
    console.log("clicked log out, userLoggedIn is: " + userNotLoggedIn)
}

//Middleware
app.use(express.json());

//Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.use(favicon(path.join(__dirname, "/public", "favicon.ico")));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


//Router
app.use('/', routes);
app.use('/recipes', recipes);
app.use('/recipes/:id/reviews', reviews);
// app.use('/users' users)


// Listener
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Glow up is connected to ${PORT}`);
});



module.exports = app;













