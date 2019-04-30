let express = require('express')
let router = express.Router({mergeParams: true})

//GET post index/recipes/:id/reviews
router.get('/',(req,res,next)=>{
    res.send('INDEX /recipes/:id/reviews');
    });


//POST create /recipes/:id/reviews
router.post('/',(req,res,next)=>{
    res.send('CREATE /recipes/:id/reviews');
     });


//GET edit /recipes/:id/reviews/edit
router.get('/:review_id/edit',(req,res,next)=>{
    res.send('EDIT /recipes/:id/reviews/review_id/edit');
     });

//PUT update  /recipes/:id/reviews
router.put('/:review_id',(req,res,next)=>{
    res.send('UPDATE /recipes/:id/reviews/review_id');
     });

//DELETE delete /recipes/:id/reviews
router.delete('/:review_id',(req,res,next)=>{
    res.send('DELETE /recipes/:id/reviews/review_id');
     });



module.exports = router