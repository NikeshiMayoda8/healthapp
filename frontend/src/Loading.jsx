import React from 'react';

function PulseLoading() {
    return (
        <div className="pulse-loading-container">
            <svg className="pulse-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle className="pulse-circle" cx="50" cy="50" r="40" />
            </svg>
        </div>
    );
}

export default PulseLoading;
