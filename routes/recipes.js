let express = require('express')
let router = express.Router()
const {errorHandler} = require('../middleware')
const {recipeIndex, 
       recipeNew,
       recipeCreate,
       recipeShow,
       recipeEdit,
       recipeUpdate} = require('../controller/recipes')

//GET post index /recipes
router.get('/', errorHandler(recipeIndex));


//GET new  /recipes/new
router.get('/new', recipeNew);

//POST create /recipes
router.post('/', errorHandler(recipeCreate));


//GET show /recipes/:id
router.get('/:id',errorHandler(recipeShow));

//GET edit /recipes/:id/edit
router.get('/:id/edit',errorHandler(recipeEdit));

//PUT update  /recipes/:id
router.put('/:id',errorHandler(recipeUpdate));

//DELETE delete /recipes/:id
router.delete('/:id',(req,res,next)=>{
    res.send('DELETE /recipes/:id');
     });



module.exports = router