let express = require('express')
let router = express.Router()

//GET post index /recipes
router.get('/',(req,res,next)=>{
    res.send('INDEX /recipes');
    });

//GET index /recipes
//GET new  /recipes/new
router.get('/new',(req,res,next)=>{
    res.send('NEW /recipes/new');
     });

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