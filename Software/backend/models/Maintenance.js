const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
    vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    cost: { type: Number, required: true },
    status: { type: String, enum: ['completed', 'pending'], default: 'pending' },
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);
