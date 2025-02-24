import React, {useEffect, useState} from 'react';
import Itinerary from '../Itinerary/Itinerary';

const Flights = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('Starting fetch...');
        fetch('/flights.json')
            .then(response => response.json())
            .then(fetchedData => {
                console.log('Fetched Data:', fetchedData);
                const formattedData = formatFlightData(fetchedData);
                setData(formattedData);
            })
            .catch(error => console.error('Error fetching flights data:', error));
    }, []); 

    const formatFlightData = (data) => {
        console.log('Raw data to format:', data);
        let itineraryData = data.itineraries;
        let legData = data.legs;
        let formattedData = [];
        for (let itinerary of itineraryData) {
            let itineraryLegs = []; 
            for (let leg_id of itinerary.legs) {
                const leg = legData.find(l => l.id === leg_id);
                if (leg) {
                    itineraryLegs.push(leg);
                }
            }
            formattedData.push({ ...itinerary, legs: itineraryLegs });
        }
        console.log('formatted flight data:', formattedData)
        return formattedData
    }

    console.log('Rendering Flights component');

    return (
        <div className="flights">
            {data.map((item) => (
                <Itinerary key={item.id} itineraryData={item} />
            ))}
        </div>
    );
};

export default Flights;