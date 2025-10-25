import { useState , useCallback, useEffect , useRef } from 'react'
function App() {
  const[length , setLength]=useState(8)
  const[numberAllowed , setNumberAllowed]=useState(false)
  const[charAllowed , setCharAllowed]= useState(false)
  const[password , setPassword]=useState("")

  //useRef hook
const passwordRef = useRef(null)

//used to optamize
  const passwordGen= useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str+="!@#$%^&*_-+=[]{}/~`"

    for(let i=1 ; i<=length ; i++){
      let char = Math.floor (Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)


  } , [length , numberAllowed , charAllowed , setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,password.length)
    window.navigator.clipboard.writeText(password)

  },[password])
   
  //use to execute function , when any state/dependencies changes
  useEffect(()=>{
    passwordGen()
  },[length ,numberAllowed , charAllowed , passwordGen ])

  useRef()

  
return (
  <>
<h1 className='text-4xl text-center text-white mt-3 mb-4>' > Password Generator</h1> 
<div className="h-40 flex flex-col bg-gray-800 w-150 ml-80 shadow-md rounded-2xl mt-2.5">
  <div className='h-20  w-150 flex justify-center '>
    <input 
    placeholder='password'
     className='h-12 border-2 w-100 mt-2.5 ml-2 rounded-2xl bg-white py-1 px-3'
      type="text"
      value={password}
      readOnly
      ref={passwordRef}

      />
    <button onClick={copyPasswordToClipboard}
     className='ml-2 bg-blue-500 h-12 w-25 mt-3 rounded-2xl  text-white hover:bg-blue-800'>Copy</button>

  </div>
  
<div className='flex items-center space-x-6  ml-13 text-orange-400'>
<input 
type="range"
min={6}
max={100}
value={length}
className='cursor-pointer '
onChange={(e)=>{setLength(e.target.value)}}


  /> 
  <label className='text-amber-5' > Length:{length}</label>
  <div className='flex items-center gap-x-1'>
    <input type="checkbox" 
    defaultChecked ={numberAllowed}
    id="numberInput" 
    onChange={()=>{
      setNumberAllowed((prev)=> !prev);
    }}
    />
    <label htmlFor="numberInput">Numbers</label>
  </div>

  <div className='flex items-center gap-x-1'>
    <input type="checkbox" 
    defaultChecked ={charAllowed}
    id="charInput" 
    onChange={()=>{
      setCharAllowed((prev)=> !prev);
    }}
    />
    <label htmlFor="charInput">characters</label>
  </div>
  </div>
  </div>

    </>
  )

}
export default App
