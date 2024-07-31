import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';


const TestEle =  <div> test element</div> 
const CheckEle = React.createElement(
  "a", 
  {href:"https://google.com", target: "_blank"},
   "click demo check"
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {CheckEle}
    {TestEle} */}
    <App />
  </React.StrictMode>,
)
