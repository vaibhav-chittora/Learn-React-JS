
import { useCallback, useEffect, useState, useRef } from 'react'

import './App.css'

function App() {

  const [length, setlength] = useState(10);

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#$%^&*~!"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]);


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // useRef Hook 

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
   passwordRef.current.select();
   passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)

  }, [password])

  return (
    <>
      <div className='w-full max-w-2xl p-5 mt-5 mx-auto rounded-lg text-yellow bg-slate-900 '>
        <h1 className='text-4xl text-center my-3'>Password Generator</h1>

        <div className='flex overflow-hidden shadow rounded-lg my-4 text-xl text-black'>

          <input type="text"
            readOnly
            className='outline-none p-3 w-full py-3 px-6 '
            value={password}
            placeholder='get your password'
            ref={passwordRef}
            
          />
          <button
            className='bg-red-800 text-yellow-400 px-3 py-0.5 hover:bg-red-700 hover:text-yellow-400 '
            onClick={copyPasswordToClipboard}
          >Copy</button>


        </div>

        <div className='flex gap-x-10 items-center text-xl mt-5'>

          <div className='flex items-center gap-x-1 text-yellow-400'>
            <input
              className='cursor-pointer'
              type="range"
              value={length}
              min={5}
              max={50}
              onChange={(e) => {
                setlength(e.target.value)
              }}

            />
            <label>Length({length})</label>
          </div>
          <div className='flex gap-x-1 items-center text-yellow-400'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label >Numbers</label>
          </div>
          <div className='flex gap-x-1 items-center text-yellow-400'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label >Special Characters</label>
          </div>

        </div>


      </div>

    </>
  )
}

export default App
