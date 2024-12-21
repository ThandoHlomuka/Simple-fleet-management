const Vehicle = require('../models/Vehicle');
const Maintenance = require('../models/Maintenance');

// Get vehicle usage report
exports.getVehicleUsageReport = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        const report = await Promise.all(vehicles.map(async (vehicle) => {
            const maintenanceRecords = await Maintenance.find({ vehicleId: vehicle._id });
            const totalCost = maintenanceRecords.reduce((sum, record) => sum + record.cost, 0);
            return {
                vehicleId: vehicle.vehicleId,
                model: vehicle.model,
                totalMaintenanceCost: totalCost,
                maintenanceCount: maintenanceRecords.length,
            };
        }));
        res.json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get fuel consumption report
exports.getFuelConsumptionReport = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        const report = vehicles.map(vehicle => ({
            vehicleId: vehicle.vehicleId,
            model: vehicle.model,
            fuelConsumption: vehicle.fuelConsumption,
        }));
        res.json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
