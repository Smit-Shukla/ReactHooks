// useRef Hook
import React, { useState, useEffect, useRef } from 'react';

const Hook4 = () => {

    const [name, setName] = useState('');


    // const [renderCount, setRenderCount] = useState(0);

    // useEffect(() => {
    //     setRenderCount(prevCount => prevCount + 1);
    // })


    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })
    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times.</div>
        </>
    )
}

export default Hook4;