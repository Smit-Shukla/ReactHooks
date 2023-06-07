import React, { useMemo, useDeferredValue } from 'react';

const List = ({ input }) => {

    const LIST_SiZE = 20000;
    const defferedInput = useDeferredValue(input);
    const list = useMemo(() => {
        const l = [];
        for (let i = 0; i < LIST_SiZE; i++) {
            l.push(<div key={i}>{defferedInput}</div>)
        }

        return l;
    }, [defferedInput]);
    return list;
}

export default List;