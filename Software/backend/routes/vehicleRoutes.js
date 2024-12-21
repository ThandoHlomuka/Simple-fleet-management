const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const vehicleController = require('../controllers/vehicleController');

router.get('/', authMiddleware, vehicleController.getVehicles);
router.post('/', authMiddleware, vehicleController.createVehicle);

module.exports = router;
