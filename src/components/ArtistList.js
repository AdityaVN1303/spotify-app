import React from 'react'
import { useSelector } from 'react-redux'

const ArtistList = () => {
    const artists = useSelector((store)=>store?.app?.artists);
    // console.log(artists);
  return (
    <div className='my-5'>
        <h1 className={`text-xl font-bold mx-5 ${artists.length === 0 && "hidden"}`}>Artists</h1>
        <div className="tracks flex flex-wrap justify-around mx-5">
        { 
            (artists.slice(0 , 6)).map((artist)=>{
                return (
                <div key={artist?.id} className="box my-3 bg-gray-600 rounded-md p-2 flex flex-col justify-around text-white w-36 lg:w-52">
                    <img src={artist?.images?.[1]?.url} className=' rounded-full w-full' alt="trackImg" />
                    <h1 className='font-bold'>{artist?.name}</h1>
                    <h2 className=' text-sm'>{artist?.type}</h2>
                </div>
                    )
            })
        }
    </div>
    </div>
  )
}

export default ArtistList