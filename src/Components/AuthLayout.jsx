import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'

function Protected({children,authentication=true}) {
const [loading ,setLoading] = useState(true)
const authStatus = useSelector((state)=>state.status)
const navigate = useNavigate()
useEffect(()=>{
    if(authentication && authStatus!==authentication ){
        navigate('/login')
    }
    if(!authentication && authStatus!==authentication){
        navigate('/')
    }
    setLoading(false)
},[authStatus,navigate,authentication])
  return (
    loading?(<div>Loading....</div>):(<>{children}</>)
  )
}

export default Protected