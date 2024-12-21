const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    licensePlate: { type: String, required: true, unique: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    trips: { type: Number, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
