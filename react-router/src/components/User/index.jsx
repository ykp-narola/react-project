import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {id} = useParams();

    return (
    <div className='bg-gray-300 text-center text-4xl p-4 '>
      User : {id}
    </div>
  )
}

export default User
