const Vehicle = require('../models/Vehicle');

exports.getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createVehicle = async (req, res) => {
    const { licensePlate, model, year, make } = req.body;
    const vehicle = new Vehicle({ licensePlate, model, make, year });
    try {
        const savedVehicle = await vehicle.save();
        res.status(201).json(savedVehicle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
