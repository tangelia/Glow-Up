const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/2708", {useNewUrlParser:true}).then(()=>{
    console.log ("Connected to MongoDB")
})


module.exports = mongoose