const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Load vehicles data
const vehiclesFilePath = path.join(__dirname, 'data', 'vehicles.json');

// Get all vehicles
app.get('/api/vehicles', (req, res) => {
    fs.readFile(vehiclesFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading vehicles data');
        }
        res.json(JSON.parse(data));
    });
});

// Add a new vehicle
app.post('/api/vehicles', (req, res) => {
    const newVehicle = req.body;

    fs.readFile(vehiclesFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading vehicles data');
        }

        const vehicles = JSON.parse(data);
        vehicles.push(newVehicle);

        fs.writeFile(vehiclesFilePath, JSON.stringify(vehicles, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving vehicle data');
            }
            res.status(201).send('Vehicle added successfully');
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
