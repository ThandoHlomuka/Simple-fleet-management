const User = require('../models/User');
const jwt = require('jsonwebtoken');

// User Registration
exports.registerUser  = async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    try {
        await user.save();
        res.status(201).json({ message: 'User  registered successfully.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// User Login
exports.loginUser  = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
        return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};
