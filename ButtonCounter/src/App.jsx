import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {


  let [counter, setCounter] = useState(10)


  // let counter = 10;

  const addvalue = () => {
    // counter = counter + 1
    if (counter >= 20) {
      alert('Value cannot be more than 20')
      counter = 0;
    }

    setCounter(counter + 1)

    console.log("clicked", counter);
  }


  const minusvalue = () => {
    if (counter <= 0) {
      alert("value cannot be negative")
      counter = 0;
    }

    setCounter(counter - 1)
    console.log('clicked', counter);
  }


  return (
    <>
      <h1>Button Counter</h1>
      <h2>Counter Value - {counter}</h2>
      <button onClick={addvalue}>Increment : {counter}</button>

      <button onClick={minusvalue}>Decrement</button>
      <p>current value : {counter}</p>

    </>
  )
}

export default App
