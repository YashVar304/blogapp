import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';




function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler=()=>{
    authService.logout().then(()=>{
        dispatch(logout())
    })
}
  return (
    
     <button className='inline-block px-6  duration-500 hover:bg-purple-400 rounded-full' onClick={logoutHandler}>
        Logout
     </button>
  )
}

export default LogoutBtn