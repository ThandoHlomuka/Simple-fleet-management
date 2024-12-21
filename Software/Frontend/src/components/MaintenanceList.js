import React, { useEffect, useState } from 'react';

const MaintenanceList = ({ vehicleId }) => {
    const [maintenanceRecords, setMaintenanceRecords] = useState([]);
    const [newRecord, setNewRecord] = useState({ date: '', description: '', cost: '' });

    useEffect(() => {
        const fetchMaintenanceRecords = async () => {
            const response = await fetch(`/api/maintenance/${vehicleId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you store the token in local storage
                },
            });
            const data = await response.json();
            setMaintenanceRecords(data);
        };
        fetchMaintenanceRecords();
    }, [vehicleId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/maintenance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token') }`,
            },
            body: JSON.stringify({ vehicleId, ...newRecord }),
        });
        if (response.ok) {
            const savedRecord = await response.json();
            setMaintenanceRecords([...maintenanceRecords, savedRecord]);
            setNewRecord({ date: '', description: '', cost: '' }); // Reset form
        }
    };

    return (
        <div>
            <h2>Maintenance Records</h2>
            <ul>
                {maintenanceRecords.map(record => (
                    <li key={record._id}>
                        {record.date}: {record.description} - ${record.cost} ({record.status})
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    value={newRecord.date}
                    onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newRecord.description}
                    onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Cost"
                    value={newRecord.cost}
                    onChange={(e) => setNewRecord({ ...newRecord, cost: e.target.value })}
                    required
                />
                <button type="submit">Add Maintenance Record</button>
            </form>
        </div>
    );
};

export default MaintenanceList;
