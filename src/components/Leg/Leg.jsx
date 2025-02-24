import React from 'react';

const Leg = ({ legData }) => {

    if (!legData) {
        return <div>No itinerary leg available</div>;
    }

    console.log('lData: ', legData)

    return (
        <div className="leg">
            <p>Departure Airport: {legData.departure_airport}</p>
            <p>Arrival Airport: {legData.arrival_airport}</p>
        </div>
    );
};

export default Leg;