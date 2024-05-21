import React from 'react'
import Input from '../Components/Input'
import { useForm } from 'react-hook-form'
import Button from '../Components/Button'
import {Link,useNavigate} from 'react-router-dom'
import Logo from '../Components/Logo'
import authService from '../appwrite/auth'
import {useState} from 'react'
import { useDispatch } from 'react-redux'


function Signup() {
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const signup = async(data)=>{
        setError('')
        try{
            const session = await authService.createAccount(data)
            if(session){
                const userData = await authService.getCurrentAccount()
                if(userData){
                    dispatch(login({userData}))
                }
                navigate('/')
            }
        }
        catch(error){
            setError(error.message)
        }
    }
    
  return (
    <div className='w-full my-20'>
        <div className={`w-full max-w-lg border border-purple-500 mx-auto rounded-xl`}>
            <div className='flex items-center justify-center'>
                <span><Logo/></span>
            </div>
            <h1 className='text-2xl font-semibold text-center mt-2'>Create an account</h1>
            <p className='text-center mt-2'>
                Already have an account? <Link to={'/login'} className='text-purple-500'>Login</Link></p>
                {error && <p className='text-red-500 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(signup)} className='flex flex-col items-center'>
                    <Input label="Email" placeholder="Enter your email" {...register("email",{required:true,validate: {
                      matchPattern:(value)=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)||
                      "Email address is not valid"

                    }})}/>
                    <Input label="Password" placeholder="Enter your password" {...register("password",{required:true})} />
                    <button type="submit" className='px-3 py-1.5 rounded-full bg-purple-500 text-white my-10'>Signup</button>
                </form>
        </div>

    </div>
  )
}

export default Signup