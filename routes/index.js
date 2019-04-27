let express = require('express')
let router = express.Router()

//Home route
router.get('/',(req,res)=>{
    res.render('../views/layout');
    });

module.exports = router