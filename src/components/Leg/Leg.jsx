import React from 'react';

const Leg = ({ legData }) => {

    if (!legData) {
        return <div>No itinerary leg available</div>;
    }

    const legStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const leftSectionStyles = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '16px',
    };

    const logoAndFlightStyles = {
        flexBasis: '100px',
    };

    const durationStyles = {
        marginLeft: 'auto',
        textAlign: 'right',
    };

    const airlineLogoUrl = `https://logos.skyscnr.com/images/airlines/favicon/${legData.airline_id}.png`;

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const formatDuration = (durationMins) => {
        const hours = Math.floor(durationMins / 60);
        const minutes = durationMins % 60;

        if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} min${minutes !== 1 ? 's' : ''}`;
        } else {
            return `${minutes} min${minutes !== 1 ? 's' : ''}`;
        }
    };

    return (
        <div className="leg" style={legStyles}>
            <div style={leftSectionStyles}>
                <div style={logoAndFlightStyles}>
                    <img
                        src={airlineLogoUrl}
                        alt={`${legData.airline_name} logo`}
                        style={{ width: '32px', height: '32px' }} 
                    />
                </div>
                <div className="leg___outbound_details" style={logoAndFlightStyles}>
                    <b>{formatTime(legData.departure_time)}</b>
                    <p>{legData.departure_airport}</p>
                </div>
                <div style={logoAndFlightStyles}>
                    <p>{'->'}</p>
                </div>
                <div className="leg___return_details" style={logoAndFlightStyles}>
                    <b>{formatTime(legData.arrival_time)}</b>
                    <p>{legData.arrival_airport}</p>
                </div>
            </div>
            <div className="leg___duration" style={durationStyles}>
                <p>{formatDuration(legData.duration_mins)}</p>
                <p style={{ color: legData.stops === 0 ? 'green' : 'red' }}>
                    {legData.stops === 0 ? 'Direct' : `${legData.stops} stop`}
                </p>
            </div>
        </div>
    );
};

export default Leg;
