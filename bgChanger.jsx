import { useState } from 'react'

import './App.css'

function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
     < h1 className='bg-amber-600 text-black justify-center '>Background color changer</h1>
<div className='w-full h-screen duration-200'
style ={{backgroundColor: color}}
>
  <div className='fixed flex flex-wrap justify-center botto-12 inset-x-0 px-2 text-amber-50 mt-120'>
    <div className='flex flexwrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button
       onClick={()=>setColor('red')} 
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor : "red"}}
      >Red</button>
      <button 
      onClick={()=>setColor('blue')} 
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor : "Blue"}}
      >Blue</button>
      <button 
      onClick={()=>setColor('green')} 
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor : "Green"}}
      >Green</button>
      <button
      onClick={()=>setColor('yellow')} 
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor : "Yellow"}}
      >Yellow</button>
      <button
      onClick={()=>setColor('brown')} 
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor : "Brown"}}
      >Brown</button>
      <button
      onClick={()=>setColor('violet')} 
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor : "violet"}}
      >violet</button>
    </div>
  </div>
</div>
    </>
  )
}

export default App
