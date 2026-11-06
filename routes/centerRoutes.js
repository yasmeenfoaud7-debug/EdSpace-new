const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');
const Booking = require('../models/Booking');

// 1. جلب قائمة المدرسين
router.get('/teachers', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. تسجيل حجز جديد في سنتر المجد
router.post('/book', async (req, res) => {
  try {
    const { studentName, studentPhone, parentPhone, grade } = req.body;
    const newBooking = new Booking({ studentName, studentPhone, parentPhone, grade });
    await newBooking.save();
    res.status(201).json({ message: 'تم الحجز بنجاح' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;