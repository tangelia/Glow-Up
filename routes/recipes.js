let express = require('express')
let router = express.Router()

//GET post index /recipes
router.get('/',(req,res,next)=>{
    res.send('/recipes');
    });

router.get('/new',(req,res,next)=>{
    res.send('/recipes/new');
        });

//GET index /recipes
//GET new  /recipes/new
//POST create /recipes
//GET show /recipes/:id
//GET edit /recipes/:id/edit
//PUT update  /recipes/:id
//DELETE delete /recipes/:id



module.exports = router