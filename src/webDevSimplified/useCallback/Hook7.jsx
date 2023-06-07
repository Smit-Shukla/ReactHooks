// useCallback Hook
import React, { useState, useCallback } from 'react';
import List from './List';

const Hook7 = () => {

    const [number, setnumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333',
    }

    return (
        <div style={theme}>
            <input type="number" value={number} onChange={e => setnumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
            <List getItems={getItems} />
        </div>
    )
}

export default Hook7;