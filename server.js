const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(express.json());
app.use(cors());





app.get('/', (req, res) => {
    res.send('Server is running!');
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB successfully!');
})
.catch((err) => {
    console.log('DB Error:', err.message);
});