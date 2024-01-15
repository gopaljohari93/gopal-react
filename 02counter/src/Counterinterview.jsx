import React, { useState } from 'react';

function Counterinterview() {
    // state
    const [counter, setCouter] = useState(15);

    const addValue = () => {
        setCouter(prevCounter => prevCounter + 1) 
        setCouter(prevCounter => prevCounter + 1)
        setCouter(prevCounter => prevCounter + 1)
        setCouter(prevCounter => prevCounter + 1)
    }

    const removeValue = () => {
        setCouter(counter - 1)
    }

    return (
        <>
            <h1>Counter value {counter}</h1>

            <button onClick={addValue} style={{ backgroundColor: 'red', color: 'white' }}>Add value Increment</button>
            <button onClick={removeValue} style={{ backgroundColor: 'pink', marginLeft: '15px' }}>Remove value Decrement</button>

            <p>footer</p>
        </>
    )
}

export default Counterinterview;