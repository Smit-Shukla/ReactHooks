// useMemo Hook
import React, { useState, useMemo } from 'react';

const Hook3 = () => {
    function slowFunction(num) {
        console.log('Calling slow function!!');
        for (let i = 0; i <= 10000000; i++) { }
        return num * 2;
    }

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
        }
    }, [dark])
    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>
                {doubleNumber}
            </div>
        </>
    )
}

export default Hook3;