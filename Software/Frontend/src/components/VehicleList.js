import React, { useEffect, useState } from 'react';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await fetch('/api/vehicles');
            const data = await response.json();
            setVehicles(data);
        };
        fetchVehicles();
    }, []);

    return (
        <div>
            <h1>Vehicle List</h1>
            <ul>
                {vehicles.map(vehicle => (
                    <li key={vehicle._id}>
                        {vehicle .licensePlate} - {vehicle.model} - {vehicle.make} ({vehicle.year})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleList;
