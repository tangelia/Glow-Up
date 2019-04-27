const express = require('express');
const 
// Initialize app
const app = express();

//Set view engine
app.set('view engine', 'hbs');





//Home route
app.get('/',(req,res)=>{
res.render('Hello World')
});

//Router
app.use('/', routes)


// Listener
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Glow up is connected to ${PORT}`);
});

















