// useLayoutEffect Hook
import React, { useState, useLayoutEffect, useRef } from 'react';

const Hook8 = () => {

    const [show, setShow] = useState(false);
    const popup = useRef();
    const button = useRef();
    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) return
        const { bottom } = button.current.getBoundingClientRect();
        popup.current.style.top = `${bottom + 25}px`;
    })

    return (
        <>
            <button ref={button} onClick={() => setShow(prev => !prev)}>Click Here</button>
            {show && (
                <div style={{ position: "absolute" }} ref={popup} >This is a popup</div>
            )}
        </>
    )
}

export default Hook8;