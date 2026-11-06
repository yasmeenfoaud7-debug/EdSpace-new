const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  studentPhone: { type: String, required: true },
  parentPhone: { type: String, required: true },
  grade: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);