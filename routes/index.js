let express = require('express')
let router = express.Router()
const passport = require('passport')
const {postRegister} = require('../controller')
const {errorHandler} = require('../middleware')

//Home route
router.get('/',(req,res)=>{
    res.render('../views/layout');
    });

// GET users listing. 
router.get('/register', (req, res, next) => {
    res.send('GET /register');
  });
  
  //POST create register user
router.post('/register', errorHandler(postRegister));

// GET users login
router.get('/login', (req, res, next) => {
    res.send('GET /login');
  });
  
  //POST create /user login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/', 
  failureRedirect: '/login'
}));

// GET users profile 
router.get('/profile', (req, res, next) => {
    res.send('GET /profile');
  });
  
  //PUT update users profile
router.put('/profile/:user_id', (req, res, next) => {
    res.send('PUT /profile/:user_id');
  });

// GET forgot user password
router.get('/forgot', (req, res, next) => {
    res.send('GET /forgot');
  });

  router.put('/forgot', (req, res, next) => {
    res.send('PUT /forgot');
  });

//   GET reset user password
router.get('/reset/:token', (req, res, next) => {
    res.send('GET /reset/:token');
  });

  router.put('/reset/:token', (req, res, next) => {
    res.send('PUT /reset/:token');
  });



module.exports = router