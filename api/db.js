// db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from a .env file

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  console.error('MONGO_URI is not defined in the environment variables.');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rest of the code remains the same...


// Get the default connection
const db = mongoose.connection;

// Event handlers for the connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

// Export the connection
module.exports = db;
