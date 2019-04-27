const express = require('express');
// Initialize app
const app = express();
const routes = require('./routes/index');


//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set view engine
app.use(express.static(__dirname+"/public"));
app.set('view engine', 'hbs');


//Router
app.use('/', routes);


// Listener
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Glow up is connected to ${PORT}`);
});

















