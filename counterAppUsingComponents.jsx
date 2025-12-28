import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)

  function Incriment(){
    return(
 setCount(count + 1)
    )
   
  }
  function Decrement(){
    return(
 setCount(count - 1)
    )
   
  }
  function Reset(){
    return(
 setCount(0)
    )
   
  }

  return (
    <>
     <h1>Counter App</h1>
     <h4>Current count : {count}</h4>
    <div className='buttons'>
       {/* <button onClick={Incriment}>Incriment➕</button>
     <button onClick={Decrement}>Decriment➖</button>
     <button onClick={Reset}>Reset🔁</button> */}
     <Button text ="Incriment➕" func={Incriment}/>
     <Button text ="Decrement➖" func={Decrement}/>
     <Button text ="Reset🔁" func={Reset}/>
    
    </div>
    </>
  )
}

export default App
