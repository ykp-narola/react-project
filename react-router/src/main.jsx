import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { About, ContactUs, GitHub, Home, Layout, User } from './components'
import { gitHubInfoLoader } from './components/GitHub/index.jsx'


// const router = createBrowserRouter([
//   { 
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />    
      <Route path='about' element={<About />} />    
      <Route path='contact' element={<ContactUs />} />    
      <Route path='user/:id?' element={<User />} />    
      <Route 
        path='/github' 
        element={<GitHub />} 
        loader={gitHubInfoLoader}
      />    
      {/* <Route path='/github' element={<GitHub />} Component={} />     */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <BrowserRouter>,
      <App />
     </BrowserRouter>, */}
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
