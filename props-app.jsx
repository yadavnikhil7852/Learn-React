import { useState } from 'react'
import './App.css'
import Card  from './components/Card'

let newArr =[1,2,3,4]
function App() {
 
  return (
    <>
      <h1 className='bg-amber-600 text-black p-3 rounded-xl mb-5 w-150'>hello Tailwind & props</h1>
      <Card userName ="chai aur code" btnText= "click me"/>
       <Card userName ="Yadav Nikhil" btnText= "visit us"/>
    </>
  )
}
export default App
