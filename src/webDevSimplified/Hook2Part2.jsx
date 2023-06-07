import React, { useEffect, useState } from 'react';

const Hook2Part2 = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function handleResize() {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    })
    return (
        <div>{windowWidth}</div>
    )
}

export default Hook2Part2;