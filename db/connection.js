const mongoose = require('mongoose')

// Connect to database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  }
  else {
    mongoose.connect('mongodb://localhost/Glow-Up', { useNewUrlParser: true });
  }
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    }
  );
  mongoose.connection.once('open',()=> {
    console.log("Mongoose has connected to MongoDB!");
  });


module.exports = mongoose

