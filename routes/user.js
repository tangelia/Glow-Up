let express = require('express');
let router = express.Router();

// GET users listing. 
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

//GET index /user
//GET new  /user/new
//POST create /user
//GET show /user/:id
//GET edit /user/:id/edit
//PUT update  /user/:id
//DELETE delete /user/:id
module.exports = router;