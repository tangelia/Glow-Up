const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/27017", {useNewUrlParser:true}).then(()=>{
    console.log ("Connected to MongoDB")
})


module.exports = mongoose