let express = require('express');
let router = express.Router();

// GET users listing. 
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

//GET index /users
//GET new  /users/new
//POST create /users
//GET show /users/:id
//GET edit /users/:id/edit
//PUT update  /users/:id
//DELETE delete /users/:id
module.exports = router;