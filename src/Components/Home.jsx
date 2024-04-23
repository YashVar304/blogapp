import React from 'react'

function Home() {
  return (
    <div className='w-full flex justify-center items-center h-screen'>
        <div className='w-full max-w-5xl flex flex-col items-center '>
        <p className='text-5xl font-light my-10'>Share your Thoughts with the World</p>
        <p className='text-2xl font-normal mb-8'>Create unique blog easily</p>
        <button className='text-xl bg-purple-600 px-5 py-2.5 mb-8 text-white'>CREATE YOUR BLOG</button>
        </div>
    </div>
  )
}

export default Home