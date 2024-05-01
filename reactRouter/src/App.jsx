import { useState } from 'react';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-500 p-5 text-3xl text-white rounded-lg'>Chai Aur React - React Router series</h1>
    </>
  )
}

export default App
