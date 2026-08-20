const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Home Route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
      console.log('Connected to MongoDB successfully!');
  })
  .catch((err) => {
      console.log('DB Error:', err.message);
  });

// Server Startup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});