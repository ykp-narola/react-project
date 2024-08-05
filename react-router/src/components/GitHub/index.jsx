import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function GitHub() {
    // const [data, setData] = useState(0);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/yash-201')
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    const data = useLoaderData();
  return (
    <div className='bg-cyan-400 text-center p-5 text-black'>
      GitHub Followers : {data?.followers}
      <img src={data?.avatar_url} alt="GitHub user Profile" srcset="" width={100} height={100} />
    </div>
  )
}

export default GitHub


export const gitHubInfoLoader = async () => {
    let response = await fetch('https://api.github.com/users/yash-201')
    return response.json()
}
