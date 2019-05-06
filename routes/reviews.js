const express = require('express')
const router = express.Router()
const {errorHandler} = require('../middleware')
const {reviewIndex, 
       reviewNew,
       reviewCreate,
       reviewShow,
    //    reviewEdit,
       reviewUpdate,
       reviewDelete } = require('../controller/reviews')

//GET post index /reviews
router.get('/', errorHandler(reviewIndex));

//GET new  /reviews/new
router.get('/new', reviewNew);

//POST create /reviews
router.post('/', errorHandler(reviewCreate));


//GET show /reviews/:id
router.get('/:id',errorHandler(reviewShow));

//GET edit /reviews/:id/edit
// router.get('/:id/edit',errorHandler(reviewEdit));

//PUT update  /reviews/:id
router.put('/:id',errorHandler(reviewUpdate));

//DELETE delete /reviews/:id
router.delete('/:id', errorHandler(reviewDelete));
    



module.exports = router