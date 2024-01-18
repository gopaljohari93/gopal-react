import React from 'react';
import './App.css'
import Card from './components/Card'

function App() {

  // let myObj = {
  //   name: 'hitesh',
  //   age: 21
  // }
  // let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      {/* components */}
      <Card username="chaiaurcode" btnText="Click me" />
      <Card username="hitesh" />

      

    </>
  )
}

export default App
