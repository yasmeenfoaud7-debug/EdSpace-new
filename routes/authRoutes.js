const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'البريد الإلكتروني مستخدم من قبل!' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        
        res.status(201).json({ message: 'تم إنشاء الحساب بنجاح', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'حدث خطأ في السيرفر', error: error.message });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(400).json({ message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة!' });
        }

        res.status(200).json({ message: 'تم تسجيل الدخول بنجاح', user });
    } catch (error) {
        res.status(500).json({ message: 'حدث خطأ في السيرفر', error: error.message });
    }
});


router.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'حدث خطأ في السيرفر', error: error.message });
    }
});

module.exports = router;