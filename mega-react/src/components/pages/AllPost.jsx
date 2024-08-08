import React,{ useEffect, useState} from 'react'
import Service from '../../appwrite/config'
import { Container, PostCard} from '../../components'
function AllPost() {
    const [post, setPost] = useState([])
    useEffect(()=> {
        Service.listPost([]).then((post) => {
            if(post) setPost(post.documents)
        })
    }, [])
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {post?.map(post => (
                <div key={post.$id} className='p-1 w-1/4'>
                    <PostCard {...post}/>
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
