const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.DB_URI;
console.log(MONGO_URI)

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));

module.exports = mongoose;

