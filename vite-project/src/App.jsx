import { useState } from "react"
import Demo from "./Demo"
import Card from "./components/Card"


function App2() {
  // let counter = 5
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    console.log("value added ", Math.random())
    // counter = counter + 1
    setCounter(counter + 1)
    //  if we do multiple times run setCounter it will run like this beacuse of fiber make bunch of data and make it once
    //  but when use via callback it will be count after response it will run all useState
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    console.log('counter :>> ', counter);
  }
  const removeValue = () => {
    console.log("value remove ", Math.random())
    // counter = counter + 1
    setCounter(counter - 1)
    console.log('counter :>> ', counter);
  }
  return (
    <>
      <h1>Count {counter}</h1>
      <button onClick={addValue}>Add Value</button>   <br /> 
      <button onClick={removeValue}>Remove Value</button>    
      {/* <Demo/>  */}
    </>
  )
}

function App(){
  let userName = {
    name: "yash",
    email : "yash@gmail.com"
  }
  return (
    <>
    <div className="flex justify-between">
      <h1 className="bg-yellow-400 rounded-xl text-blue-950 p-2">First H1</h1>
    <h1 className="bg-green-400 text-center p-2 rounded-xl"> Test tailwind </h1>
    </div>
    <Card channal="test1" userName={userName}/>
    <Card channal="test2" userName={userName}/>
    </>
  )
}
export default App
