import React, { useState } from 'react';

function Counter() {

    // Example 1
    // Initialize useState
    const [color, setColor] = useState("Deepika");

    // Example 2
    const [name, setName] = useState("Deepika");

    // Example 3
    const [counter, setCounter] = useState(0);

    // Example 4 We could create multiple state Hooks to track individual values
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("BMW");
    const [year, setYear] = useState(1964);
    const [colors, setColors] = useState("red");

    // Example 5 Create a single Hook that holds an object:
    const [car, setCar] = useState({
        brand: 'Ford',
        model: 'BMW',
        year: 1964,
        colors: 'red'
    });

    return (
        <>
            {/* Read State */}
            {/* Example 1 Use the state variable in the rendered component. */}
            <h1>My color is {color}</h1>

            {/* Update State */}
            {/* Example 2 To update our state, we use our state updater function.*/}
            <p>My name is {name}</p>
            <button onClick={() => setName("Simran")}>Update</button>

            {/* Example 3 Counter*/}
            <p>Count is {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Counter Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Counter Decrement</button>

            {/* Example 4 Create multiple state Hooks: */}
            <h1>My {brand}</h1>
            <p>it is a {colors} {model} from {year}</p>

            {/* Example 5 Create a single Hook that holds an object: */}
            <h2>My {car.brand}</h2>
            <p>it is a {car.colors} {car.model} from {car.year}</p>
        </>
    )
}

export default Counter;