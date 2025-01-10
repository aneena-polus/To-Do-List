import React, { useState } from 'react';

function ViewMore(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {isExpanded || props.text.length <= props.maxLength
                ? props.text
                : `${props.text.slice(0, props.maxLength)}...`}
            {props.text.length > props.maxLength && (
                <a onClick={toggleExpanded} className="ps-2 pointer"> {isExpanded ? 'view less' : 'view more'} </a>
            )}
        </>
    );
}

export default ViewMore;
