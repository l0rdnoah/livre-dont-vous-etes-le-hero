import React, { useState } from 'react';

const EcoButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <button
            style={{
                backgroundColor: isOn ? '#32a852' : '#007AFF',
                color: isOn ? '#FFFFFF' : '#FFFFFF',
                borderRadius: '8px',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            {isOn ? 'ECO' : 'NORMAL'}
        </button>
    );
};

export default EcoButton;