import React from 'react'
import { Link } from 'react-router-dom'
import Service from '../appwrite/config'

function PostCard({$Id, title, featuredImage}) {
  return (
    <div>
        <Link to={`/post/${id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={Service.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
        </Link>
    </div>
)
}

export default PostCard
