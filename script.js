 document.getElementById('vehicleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const color = document.getElementById('color').value;
    const department = document.getElementById('department').value;
    const driver  = document.getElementById('driver name').value;
    const organisation = document.getElementById('organisation').value;

    const newVehicle = { make, model, year, color, department, driver, organisation };

    fetch('/api/vehicles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVehicle),
    })
    .then(response => {
        if (response.ok) {
            alert('Vehicle added successfully');
            loadVehicles();
            document.getElementById('vehicleForm').reset();
        } else {
            alert('Error adding vehicle');
        }
    });
});

function loadVehicles() {
    fetch('/api/vehicles')
        .then(response => response.json())
        .then(vehicles => {
            const
