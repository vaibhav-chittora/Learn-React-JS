import { useState } from "react"


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='h-screen w-full'
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex  justify-center items-center left-12 ">
        <div className="flex flex-col h-screen  justify-center items-center gap rounded-3xl  " style={{ backgroundColor: color }}>

          <button onClick={() => { setColor("red") }} className="outline-none rounded-full px-6 py-3 text-white  m-3" style={{ backgroundColor: 'red' }}>Red</button>
          <button
            onClick={() => { setColor("orange") }} className="outline-none rounded-full px-6 py-3 text-white  m-3" style={{ backgroundColor: 'orange' }}>Orange</button>
          <button
            onClick={() => { setColor("yellow") }} className="outline-none rounded-full px-6 py-3 text-white m-3" style={{ backgroundColor: 'yellow' }}>Yellow</button>
          <button
            onClick={() => { setColor("blue") }} className="outline-none rounded-full px-6 py-3  text-white m-3" style={{ backgroundColor: 'blue' }}>Blue</button>

          <button
            onClick={() => { setColor("purple") }} className="outline-none rounded-full px-6 py-3  text-white m-3" style={{ backgroundColor: 'purple' }}>Purple</button>
          <button
            onClick={() => { setColor("green") }} className="outline-none rounded-full px-6 py-3  text-white m-3" style={{ backgroundColor: 'green' }}>Green</button>
          <button
            onClick={() => { setColor("pink") }} className="outline-none rounded-full px-6 py-3  text-white m-3" style={{ backgroundColor: 'pink' }}>Pink</button>
          <button
            onClick={() => { setColor("grey") }} className="outline-none rounded-full px-6 py-3  text-white m-3" style={{ backgroundColor: 'grey' }}>Grey</button>
          <button
            onClick={() => { setColor("white") }} className="outline-none rounded-full px-6 py-3 m-3" style={{ backgroundColor: 'white' }}>White</button>

        </div>
      </div>

    </div>


  )
}

export default App
