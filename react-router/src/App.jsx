import { useState } from 'react'
import './App.css'
import { Header, Footer, Home } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
