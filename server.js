const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// لخدمة ملفات الواجهة الأمامية (HTML, CSS, JS) من المجلد الحالي
app.use(express.static(__dirname));

// الصفحة الرئيسية بتعرض ملف index.html بتاعك
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
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