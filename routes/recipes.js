let express = require('express')
let router = express.Router()
const {errorHandler} = require('../middleware')
const {getRecipes, newRecipe} = require('../controller/recipes')

//GET post index /recipes
router.get('/', errorHandler(getRecipes));


//GET new  /recipes/new
router.get('/new', newRecipe);

//POST create /recipes
router.post('/',(req,res,next)=>{
    res.send('CREATE /recipes');
     });


//GET show /recipes/:id
router.get('/:id',(req,res,next)=>{
    res.send('SHOW /recipes/:id');
     });

//GET edit /recipes/:id/edit
router.get('/:id/edit',(req,res,next)=>{
    res.send('EDIT /recipes/:id/edit');
     });

//PUT update  /recipes/:id
router.put('/:id',(req,res,next)=>{
    res.send('UPDATE /recipes/:id');
     });

//DELETE delete /recipes/:id
router.delete('/:id',(req,res,next)=>{
    res.send('DELETE /recipes/:id');
     });



module.exports = router