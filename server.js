const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const centerRoutes = require('./routes/centerRoutes');

const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // مجلد الـ Frontend

// Routes API
app.use('/api', centerRoutes);


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/edspace_center')
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(`PORT, () => console.log(Server running on port ${PORT})`);