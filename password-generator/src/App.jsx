import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(()=>{
    try {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "~!@#$%^&*()"
      for(let i = 0; i < length; i++){
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char) 
      }
      setPassword(pass)
    } catch (error) {
      console.log('error :>> ', error);
    }
  }, [length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,10)  // set selection range
    window.navigator.clipboard.writeText(password);
  },[password])
  useEffect(()=> {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-gray-600'>
        <h1 className='text-4xl shadow text-center py-4 '>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 ' placeholder='password' ref={passwordRef} readOnly/>
          <button className='outline-none bg-blue-700 text-white px-4 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-lg gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)}/>
              <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultValue={numberAllowed} id='numberInput' onChange={() => setNumberAllowed((prev) => !prev)}/>
              <label htmlFor="numberInput"> Number </label>
          </div>
          <div className='flex items-center gap-x-1 py-4'>
              <input type="checkbox" defaultValue={charAllowed} id='charInput' onChange={() => setcharAllowed((prev) => !prev)}/>
              <label htmlFor="charInput"> Characters </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
