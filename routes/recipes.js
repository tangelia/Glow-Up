let express = require('express')
let router = express.Router()
const {errorHandler} = require('../middleware')
const {getRecipes, 
       newRecipe,
       createRecipe,
       showRecipe} = require('../controller/recipes')

//GET post index /recipes
router.get('/', errorHandler(getRecipes));


//GET new  /recipes/new
router.get('/new', newRecipe);

//POST create /recipes
router.post('/', errorHandler(createRecipe));


//GET show /recipes/:id
router.get('/:id',errorHandler(showRecipe));

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