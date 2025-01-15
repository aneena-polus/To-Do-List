import React, { useState } from 'react';
import Link from '@mui/material/Link';

function ViewMore(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {isExpanded || props.text.length <= props.maxLength
                ? props.text + ' '
                : `${props.text.slice(0, props.maxLength)}... `}
            {props.text.length > props.maxLength && (
                <Link href="#" underline="always" onClick={toggleExpanded} style={{ fontSize: 14 }}>
                    {isExpanded ? 'view less' : 'view more'}
                </Link>
            )}
        </>
    );
}

export default ViewMore;
