import React from 'react'
import { useSelector } from 'react-redux'

const Song = () => {

  const data = useSelector((store)=>store?.app?.current);
  const dataArtist = useSelector((store)=>store?.app?.currentArtist);
  console.log(dataArtist);
  return (
    <div className="detail m-2 mb-24 lg:mx-10">
      <img src={Object.keys(data).length !== 0 ? (data?.album?.images?.[0]?.url || data?.images?.[0]?.url) : dataArtist?.images?.[0]?.url} alt="headImg" className='w-3/4 mx-auto lg:w-1/4 rounded-full' />
      <div className="writeup px-5 mt-5 h-fulltext-white">
        <h1 className='text-3xl font-semibold lg:text-4xl'>
        {Object.keys(data).length !== 0 ? data?.name : dataArtist?.name}
        </h1>
        <h2 className='text-lg my-1 lg:text-xl'>
          {data?.artists?.[0]?.name}
        </h2>
        <div className=" flex space-x-5">
        <h2 className='text-lg my-1 lg:text-xl'>
          {dataArtist?.followers?.total} followers
        </h2>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate, dolorem autem expedita dolore excepturi nihil reiciendis! Dolorum velit quidem ipsam dolores tempore ipsa porro doloribus, veritatis illum modi quod neque nisi sit. Error nobis quidem officiis earum ex, ullam dolores culpa! Nobis quasi impedit eaque voluptatum ipsam eos a?</p>
      </div>
    </div>
  )
}

export default Song