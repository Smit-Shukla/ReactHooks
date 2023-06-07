import React, { useState, useRef } from 'react';

const Hook4Part2 = () => {

    const [name, setName] = useState('');
    const inputRef = useRef()

    function focus() {
        inputRef.current.focus();
    }
    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <button onClick={focus}>Focus</button>
        </>
    )
}

export default Hook4Part2;