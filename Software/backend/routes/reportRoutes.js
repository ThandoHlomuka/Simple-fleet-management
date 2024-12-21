const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Get vehicle usage report
router.get('/usage', reportController.getVehicleUsageReport);

// Get fuel consumption report
router.get('/fuel', reportController.getFuelConsumptionReport);

module.exports = router;
