const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');
const authMiddleware = require('../middleware/authMiddleware'); // Protect routes

// Get all maintenance records for a specific vehicle
router.get('/:vehicleId', authMiddleware, maintenanceController.getMaintenanceRecords);

// Create a new maintenance record
router.post('/', authMiddleware, maintenanceController.createMaintenanceRecord);

module.exports = router;
