import React from 'react'
import logo from '../assets/logo.svg'
import Home from './Home'
import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <header className=' shadow sticky top-0 z-50'>
        <nav className='flex justify-between items-center bg-white'>
            <img src={logo} alt="" className='h-16'/>
            <ul>
                <li>
                    <NavLink to={'/'} className={({isActive})=>`hover:text-purple-600 text-lg font-medium ${isActive?"text-purple-600":"text-black"}`}>
                        Home
                    </NavLink>
                </li>
            </ul>
            <div className='flex justify-center items-center'>
                
                    <NavLink to={'/login'} className={({isActive})=>`mx-6 px-3 py-2.5 rounded-lg ${isActive?"bg-purple-600 text-white":"bg-white"}`}>Login</NavLink>
                    <NavLink to={'/signup'} className={({isActive})=>`mx-6 px-3 py-2.5 rounded-lg ${isActive?"bg-purple-600 text-white":"bg-white"}`}>Signup</NavLink>
                
            </div>
        </nav>

    </header>
  )
}

export default Header