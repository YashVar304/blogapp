import React from 'react'
import { useState, useEffect } from 'react'
import Container from '../Components/container/Container'
import appwriteService from '../appwrite/config'
import PostCard from '../Components/PostCard'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
          <div className='w-full flex justify-center items-center '>
          <div className='w-full max-w-5xl flex flex-col items-center '>
          <p className='text-5xl font-light my-10'>Share your Thoughts with the World</p>
          <p className='text-2xl font-normal mb-8'>Create unique blog easily</p>
          <button className='text-xl bg-purple-600 px-5 py-2.5 mb-8 text-white' onClick={()=>navigate('/add-post')}>CREATE YOUR BLOG</button>
          </div>
      </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home