import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../../components'
import { useNavigate, useParams } from 'react-router-dom';
import Service from '../../appwrite/config'

function EditPost() {
    const [post, setPosts] = useState(null);
    const navigate = useNavigate();
    const { slug } = useParams();

    useEffect(()=> {
        Service.getPost(slug).then((post) => {
            if(post){
                setPosts(post)
            } else{
                navigate("/")
            }
        })
    }, [slug, navigate])
  return post ? 
  <div className='py-8'>
    <Container>
        <PostForm post={post} />
    </Container>
  </div> : null
}

export default EditPost
