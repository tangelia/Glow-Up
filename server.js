const express = require('express');
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// const path =require ('path')



const routes = require('./routes/index');
// const users = require('./routes/user')

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




//Router
app.use('/', routes);


// Listener
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Glow up is connected to ${PORT}`);
});

















