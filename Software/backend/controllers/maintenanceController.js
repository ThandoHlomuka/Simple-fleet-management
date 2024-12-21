const Maintenance = require('../models/Maintenance');

// Get all maintenance records for a specific vehicle
exports.getMaintenanceRecords = async (req, res) => {
    try {
        const records = await Maintenance.find({ vehicleId: req.params.vehicleId }).populate('vehicleId');
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new maintenance record
exports.createMaintenanceRecord = async (req, res) => {
    const { vehicleId, date, description, cost } = req.body;
    const maintenance = new Maintenance({ vehicleId, date, description, cost });

    try {
        const savedMaintenance = await maintenance.save();
        res.status(201).json(savedMaintenance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
