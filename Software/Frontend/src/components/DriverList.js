import React, { useEffect, useState } from 'react';

const DriverList = () => {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        const fetchDrivers = async () => {
            const response = await fetch('/api/drivers');
            const data = await response.json();
            setDrivers(data);
        };
        fetchDrivers();
    }, []);

    return (
        <div>
            <h1>Driver List</h1>
            <ul>
                {drivers.map(driver => (
                    <li key={driver._id}>
                        {driver.name} - {driver.licenseNumber} - {driver.email} ({driver.phone})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DriverList;
