import { useState } from "react";

function BubbleSelector({ options, onSelect, selectedOption }) {
    const [hoveredOption, setHoveredOption] = useState();
    const handleBubbleClick = (option) => {
        onSelect(option);
    };

    const bubbleStyle = {
        display: 'inline-block',
        borderRadius: '10px',
        padding: '0.025em 1em',
        backgroundColor: '#f0f0f0',
        color: '#000',
        textAlign: 'center',
        lineHeight: '50px',
        margin: '5px',
        cursor: 'pointer',
        textTransform: 'capitalize',
    };
    const bubbleHoverStyle = {
        backgroundColor: '#C7EAFF',
    };
    const bubbleActiveStyle = {
        backgroundColor: '#2079AF',
        color: '#fff',
    };
    return (
        <div className="bubble-selector" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {options.map((option, index) => (
                <div
                    key={index}
                    className="bubble"
                    onClick={() => handleBubbleClick(option)}
                    style={{
                        ...bubbleStyle,
                        ...(hoveredOption === option ? bubbleHoverStyle : {}),
                        ...(selectedOption === option ? bubbleActiveStyle : {}),
                    }}
                    onMouseOver={() => setHoveredOption(option)}
                    onMouseOut={() => setHoveredOption('')}
                >
                    {option}
                </div>
            ))
            }
        </div >
    );
}

export default BubbleSelector;
