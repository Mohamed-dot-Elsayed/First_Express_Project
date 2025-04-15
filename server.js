const express = require('express');
const app = express();

const connectDB = require('./src/config/db');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 5000;

const Test = require('./src/models/test');




connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
