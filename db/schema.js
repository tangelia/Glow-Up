const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

const LinkSchema = new Schema({
    url: String,
    description: String
});


const RecipeSchema = new Schema({
    title: String,
    description: String,
    imageUrl: String,
    ingredients:String,
    directions: String,
    links: [LinkSchema],
    created_at: Date,
    updated_at: Date
});

const DashboardSchema = new Schema({
    name: String,
    recipes: [RecipeSchema],
    created_at: Date,
    updated_at: Date,
    links: [LinkSchema],
})

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String, //{type: String , required: true, unique: true}, // REACH add regex
    created_at: Date,
    updated_at: Date,
    user_name: String, // REACH regex
    password: String,
    dashboard: DashboardSchema,
    recipes: [RecipeSchema],
    loggedIn: false,
    job_name: String
});

// Example query found online
// User.find({}).populate('recipes').run(function(err, users) {
    // do something
// });

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

RecipeSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

DashboardSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

const UserModel = mongoose.model("User", UserSchema);
const RecipeModel = mongoose.model("Recipe", RecipeSchema);
const DashboardModel = mongoose.model("Dashboard", DashboardSchema);
const LinkModel = mongoose.model("Link", LinkSchema);

module.exports = {
    User: UserModel,
    Recipe: RecipeModel,
    Dashboard: DashboardModel,
    Link: LinkModel
};
