// useContext hook
import React, { useState, createContext, useContext } from 'react';

const Hook5 = () => {

    const UserContext = createContext();

    function Component1() {
        const [user, setUser] = useState('Lewis Capaldi');

        return (
            <UserContext.Provider>
                <h1>{`Hello ${user}!`}</h1>
                <Component2 />
            </UserContext.Provider>
        );
    }

    function Component2() {
        return (
            <>
                <h1>Component 2</h1>
                <Component3 />
            </>
        );
    }

    function Component3() {
        return (
            <>
                <h1>Component 3</h1>
                <Component4 />
            </>
        );
    }

    function Component4() {
        return (
            <>
                <h1>Component 4</h1>
                <Component5 />
            </>
        )
    }

    function Component5() {
        const user = useContext(UserContext);

        return (
            <>
                <h1>Component 5</h1>
                <h2>{`Hello ${user}! Againnn!!`}</h2>
            </>
        )
    }

    return (
        <>
            <p>Hook 5</p>
            <Component1 />
        </>
    )
}

export default Hook5;