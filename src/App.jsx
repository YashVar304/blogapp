import { useEffect, useState } from 'react'
import Header from './Components/header/Header'
import Footer from './Components/footer/Footer'
import Home from './pages/Home'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PostForm from './Components/postForm/PostForm'
import { Outlet } from 'react-router-dom'
function App() {


  const [loading ,setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(()=>{
    authService.getCurrentAccount().then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    }).finally(setLoading(false))
  },[])


  return !loading?(
  <div className='min-h-screen flex flex-wrap content-between'>
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>):(<div className='w-full h-full flex justify-center items-center'>Loading..</div>)
}

export default App
