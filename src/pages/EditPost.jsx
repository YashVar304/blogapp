import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import Container from '../Components/container/Container'
import PostForm from '../Components/postForm/PostForm'


function EditPost() {
    const [post,setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{
        appwriteService.getPost(slug).then((post)=>{
            if(post){
                setPost(post)
                
            }
            else{
                navigate('/')
            }
        })
    },[])
  return (
    post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null  )
}

export default EditPost