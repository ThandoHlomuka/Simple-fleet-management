import React from 'react';
import VehicleList from './components/VehicleList';
import DriverList from './components/DriverList';

const App = () => {
    return (
        <div>
            <h1>Fleet Management Software</h1>
            <VehicleList />
            <DriverList/>
        </div>
    );
};

export default App;
