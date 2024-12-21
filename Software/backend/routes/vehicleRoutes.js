const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const vehicleController = require('../controllers/vehicleController');
const Vehicle = require('../models/Vehicle');

router.post('/update', async (req, res) => {
    const { vehicleId, latitude, longitude } = req.body;
    const vehicle = await Vehicle.findOneAndUpdate(
        { vehicleId },
        { latitude, longitude, timestamp: new Date() },
        { new: true, upsert: true }
    );
    res.json(vehicle);
});

router.get('/', async (req, res) => {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
});

router.get('/', authMiddleware, vehicleController.getVehicles);
router.post('/', authMiddleware, vehicleController.createVehicle);

module.exports = router;
