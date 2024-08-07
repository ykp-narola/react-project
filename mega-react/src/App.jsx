import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  useEffect(()=> {
    authService.getCurrentUser()
    .then((userData)=> {
      if(userData){
        dispatch(login({userData}));
      }
    })
    .catch(err =>  dispatch(logout()))
    .finally(() => setLoading(false));
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-300'>
      <div className='w-full'>
        <Header />
        TODO: <Outlet />
        <Footer />
      </div>
    </div>
  ) : <div>API not calling</div>
}

export default App
