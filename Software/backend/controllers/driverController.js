const Driver = require('../models/Driver');

exports.getDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find();
        res.json(drivers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createDriver = async (req, res) => {
    const { name, licenseNumber, phone } = req.body;
    const driver = new Driver({ name, licenseNumber, phone });
    try {
        const savedDriver = await driver.save();
        res.status(201).json(savedDriver);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
