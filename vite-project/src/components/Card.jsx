import React from 'react'

function Card({channal,userName}) {
    // console.log('userName :>> ', userName);
    return (
    <div className="w-60 h-60 rounded-xl">
    <img
      src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
      alt="Giphy"
      className="rounded-t-xl"
    />
    {/* <h1>{userName.email}</h1> */}
    <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
      <h1 className="font-bold  font-mono  text-xl text-fuchsia-50">Available soon {channal}</h1>
    </div>
  </div>
  )
}

export default Card
