import React from 'react';
import Leg from '../Leg/Leg';
import './Itinerary.css';

const Itinerary = ({ itineraryData }) => {

    if (!itineraryData) {
        return <div>No itinerary data available</div>;
    }

    console.log('iData: ', itineraryData)

    return (
        <div className="itinerary">
            {itineraryData.legs.map((leg) => (
                console.log('leg: ', leg),
                <Leg key={leg.id} legData={leg} />
            ))}            
            <p>Price: {itineraryData.price ? itineraryData.price : 'N/A'}</p>
            <p>Agent: {itineraryData.agent ? itineraryData.agent : 'N/A'}</p>
        </div>
    );
};

export default Itinerary;