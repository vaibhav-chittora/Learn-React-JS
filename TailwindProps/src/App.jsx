import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className='bg-green-400 text-red-500 p-3 rounded-2xl mb-5'>Hello World!!</h1>

   <Card heading='About world' btnText='Read More about world'/>
    </>
  )
}

export default App
