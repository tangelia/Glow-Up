require('dotenv').config();

const mongoose = require('mongoose');

if (process.env.MONGODB_URI) {
       mongoose.connect(process.env.MONGODB_URI);
      }
      else {
        mongoose.connect('mongodb://localhost/Glow-Up');
      }
      mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
        }
      );
      mongoose.connection.once('open',()=> {
        console.log("Mongoose has connected to MongoDB!");
      });
    

const User = require('../models/User');
const Recipe = require('../models/Recipe');
const Dashboard = require('../models/Dashboard');
const Link = require('../models/link');

mongoose.promise = global.Promise;

const db = mongoose.connection;

Recipe.deleteMany({}, function(err) {
    console.log(err);
});

User.deleteOne({}, function(err) {
    console.log(err);
});

Dashboard.deleteOne({}, function(err) {
    console.log(err);
});

Link.deleteMany({}, (err) => {
    console.log(err);
})

// YAKITTA SEEDED DATA

const Yakitta = new User({
    first_name: 'Yakitta',
    last_name: 'Broom',
    email: 'yakittabroomn@gmail.com',
    created_at: '',
    updated_at: '',
    user_name: 'Yakitta',
    password: 'moonbeamscousin',
    // dashboard: 'Yakitta Broom Dashboard',
});

// DORIS SEEDED DATA

const Doris = new User({
    first_name: 'Doris',
    last_name: 'Broom',
    email: 'doris.broom@gmail.com',
    created_at: '',
    updated_at: '',
    user_name: 'Doris',
    password: 'moonbeamsgma',
    // dashboard: 'Doris Broom\'s Dashboard',
});

// THANDIWE SEEDED DATA

const Thandiwe = new User({
    first_name: 'Thandiwe',
    last_name: 'Tinsley',
    email: 'doremidancer@gmail.com',
    created_at: '',
    updated_at: '',
    user_name: 'Thandiwe',
    password: 'moonbeamisdoremi',
    // dashboard: 'Thandiwe Tinsley\'s Dashboard',
});

// Tangelia SEEDED DATA

const TangeliaDashboardLinkBodyButter = new Link({
    name: 'Body Butter',
    url: '',
    description: 'Link to my recipe'
});


const TangeliaBodyButter = new Recipe({
    title: 'Body Butter',
    user_name: 'Tangelia',
    description: 'Whipped Body Butter',
    imageUrl: 'https://3.bp.blogspot.com/-HofXwwurjTU/VM1YQWFCKLI/AAAAAAAAGQQ/k-TObMa5j_w/s1600/5050butter.jpg',
    ingredients:'beeswax,vitamin e,jojoba oil',
    directions: 'Weigh out ingregidents, add to heat proof container, place container on LOW heat and stir until melted, remove from heat, add essential oils, stir, pour into container, let cool to room tempurature,enjoy!',
    created_at: '',
    updated_at: ''
});

const TangeliaFaceOil = new Recipe({
    title: 'Face Oil',
    user_name: 'Tangelia',
    description: 'Cleansing Face Oil',
    imageUrl: 'https://thetoastedpinenut.com/wp-content/uploads/2018/07/IMG_7264.jpg',
    ingredients:'olive oil,castor oil, avocado oil, grapeseed oil, vitamin e',
    directions: 'Weigh out ingregidents, mix together well, pour into container and enjoy!',
    created_at: '',
    updated_at: ''
});

const TangeliaHairMask = new Recipe({
    title: 'Hair Mask',
    user_name: 'Tangelia',
    description: 'Nurishing Hair Mask',
    imageUrl: 'https://thetoastedpinenut.com/wp-content/uploads/2018/07/IMG_7264.jpg',
    ingredients:'1 ripe banana, 1/2 a ripe avocado, and 2 tablespoons melted coconut oil',
    directions: 'Blend ingredients in your food processor until its combined and smooth. Transfer it to a bowl. Work it through your hair and allow it to sit for about 20 minutes, or however long you like! Rinse out of hair, style as you like. Enjoy! ',
    created_at: '',
    updated_at: ''
});

const TangeliaDashboard = new Dashboard({
    name: 'Tangelia\'s Dashboard',
    recipes: [TangeliaBodyButter],
    created_at: '',
    updated_at: '',
    links: [TangeliaDashboardLinkBodyButter],
    user_name: 'Tangelia'
});

const Tangelia = new User({
    first_name: 'Tangelia',
    last_name: 'Broom',
    email: 'tangelia.freedman@gmail.com',
    created_at: '',
    updated_at: '',
    user_name: 'Tangelia',
    password: 'moonbeamsmommy',
    dashboard: TangeliaDashboard,
    recipes: [TangeliaBodyButter, TangeliaHairMask, TangeliaFaceOil],
});

// Save Yakitta
Yakitta.save( (err) => {
    if (err) console.log('Yakitta user error' + err);
    console.log('Yakitta created');
})

// Save Tangelia Links, recipe, dashboard, user
TangeliaDashboardLinkBodyButter.save( (err) => {
    if (err) console.log('Tangelia Body Butter Link error' + err);
    console.log('Tangelia Body Butter Link created');
})

TangeliaBodyButter.save( (err) => {
    if (err) console.log('Tangelia Body Butter Recipe error' + err);
    console.log('Tangelia Body Butter Recipe created');
})
TangeliaFaceOil.save( (err) => {
    if (err) console.log('Tangelia Face Oil Recipe error' + err);
    console.log('Tangelia Face Oil Recipe created');
})
TangeliaHairMask.save( (err) => {
    if (err) console.log('Tangelia Hair Mask Recipe error' + err);
    console.log('Tangelia Hair Mask Recipe created');
})
TangeliaDashboard.save( (err) => {
    if (err) console.log('Tangelia Dashboard error' + err);
    console.log('Tangelia Dashboard created');
})
Tangelia.save( (err) => {
    if (err) console.log('Tangelia user error' +err);
    console.log('Tangelia user created');
})

// Save Doris
Doris.save( (err) => {
    if (err) console.log('Doris user ' + err);
    console.log('Doris created');
})

// Save Thandiwe
Thandiwe.save( (err) => {
    if (err) console.log('Thandiwe user ' + err);
    console.log('Thandiwe created');
})


// CONNECTION EVENTS
db.once('open', function() {
  console.log("Opened mongoose.");
});

db.once('close', function() {
  console.log("Closed mongoose.");
});

db.on('connected', function() {
  console.log('Mongoose connected to ' + db.host + ':' + db.port + '/' + db.name);
});

db.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

db.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

module.exports = db;