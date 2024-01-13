import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Cardp from './Cardp';

function App() {
  let [counter, setCounter] = useState(15);
  // variable - function

  const addValue = () => {
    setCounter(counter + 1)
  }


  return (
    <>
      {/* <h1>Chai aur React {counter}</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={counter}>Add value</button>
      <br />
      <button onClick={counter}>remove value</button> */}

      {/* Component */}
      {/* <Counter /> */}

      {/* <Cardp brand="Ford" /> */}

    </>
  )
}

export default App
