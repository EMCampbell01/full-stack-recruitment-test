import React from 'react';
import Leg from '../Leg/Leg';
import styles from './Itinerary.css';

const Itinerary = ({ itineraryData }) => {

    if (!itineraryData) {
        return <div>No itinerary data available</div>;
    }

    const itineraryStyles = {
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '10px',
        margin: '10px',
        maxWidth: '12cm'
    };

    const itinerary__details = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    const itinerary__details__button = {
        backgroundColor: 'darkblue',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
    }

    console.log('iData: ', itineraryData)
    console.log('styles', styles)

    return (
        <div className="itinerary" style={itineraryStyles}>
            {itineraryData.legs.map((leg) => (
                console.log('leg: ', leg),
                <Leg key={leg.id} legData={leg} />
            ))}
            <div className="itinerary__details" style={itinerary__details}>
                <div>        
                    <h1>{itineraryData.price ? itineraryData.price : 'N/A'}</h1>
                    <p style={{ color: 'grey' }}>{itineraryData.agent ? itineraryData.agent : 'N/A'}</p>
                </div>    
                <button style={itinerary__details__button}><b>Select</b></button>
            </div>
        </div>
    );
};

export default Itinerary;