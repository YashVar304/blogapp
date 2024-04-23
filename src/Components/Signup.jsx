import React from 'react'

function Signup() {
  return (
    <div className='w-full'><div className='w-full max-w-md mx-auto flex flex-col justify-center items-center  my-10 border-2 rounded-2xl  shadow-xl border-purple-600 p-10'>
        <h2 className='text-4xl mb-8 font-bold'>Signup</h2>
        <div className='flex flex-col my-3 items-start justify-start w-full'>
            <label htmlFor="" className='text-xl font-medium my-2'>Email id</label>
            <input type="text" placeholder='Email Id' className='h-10 outline-none rounded-lg border-2 px-3 py-1.5 w-full border-purple-600'/>
        </div>
        <div className='flex flex-col my-3 items-start justify-start w-full'>
            <label htmlFor="" className='text-xl font-medium my-2'>Password</label>
            <input type="text" placeholder=' Enter Password' className='h-10 outline-none rounded-lg border-2 px-3 py-1.5 w-full border-purple-600'/>
        </div>
        <div className='flex flex-col my-3 items-start justify-start w-full'>
            <label htmlFor="" className='text-xl font-medium my-2'> Confirm Password</label>
            <input type="text" placeholder='Re Enter Password' className='h-10 outline-none rounded-lg border-2 px-3 py-1.5 w-full border-purple-600'/>
        </div>
        <button className='px-3 py-2.5 bg-purple-600 text-white rounded-lg my-3 hover:bg-purple-500'>
            Submit
        </button>
    </div></div>
  )
}

export default Signup