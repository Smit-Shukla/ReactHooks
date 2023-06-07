// useState Hook
import React, { useState } from 'react';

const Hook1 = () => {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('blue');

    function incrementCount() {
        setCount(prevCount => prevCount + 1);
        setTheme('red');
    }

    function decrementCount() {
        setCount(prevCount => prevCount - 1);
        setTheme('blue');
    }
    return (
        <>
            <button onClick={incrementCount}>+</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={decrementCount}>-</button>

        </>
    )
}

export default Hook1;