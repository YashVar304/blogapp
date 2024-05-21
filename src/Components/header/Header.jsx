import React from 'react'
import Container from '../container/Container'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../Components/Logo'
import LogoutBtn from './LogoutBtn'


function Header() {
    const authStatus = useSelector(state=>state.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            status: true
        },
        {
            name: 'Login',
            slug: '/login',
            status:!authStatus
        },
        {
            name: 'Signup',
            slug: '/signup',
            status:!authStatus
        },
        {
            name: 'All Post',
            slug: '/all-posts',
            status:authStatus
        },
        {
            name: 'Post',
            slug: '/add-post',
            status:authStatus
        },
    ]
  return (
   <header className='py-3 shadow '>
    <Container>
        <nav className='flex'>
           <div>
            <Logo/>
           </div>
              <ul className='flex ml-auto items-center justify-center'>
                {
                    navItems.map((item)=>
                        item.status?(
                            <li key={item.name}  className='inline-block px-6 py-2 duration-500 hover:bg-purple-400 rounded-full'>
                                <button onClick={()=>navigate(item.slug)}>{item.name}</button>
                            </li>
                        ):(null)
                    )
                }
              </ul>
              {authStatus && <LogoutBtn/>}
        </nav>
    </Container>
   </header>
  )
}

export default Header