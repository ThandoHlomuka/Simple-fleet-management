const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const vehicleRoutes = require('./routes/vehicleRoutes');
const driverRoutes = require('./routes/driverRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/vehicles', vehicleRoutes);
app.use('/api/drivers', driverRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});