import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent } from '../utils/appSlice';

const TrackList = () => {
    const tracks = useSelector((store)=>store?.app?.tracks);
    const dispatch = useDispatch();
    // console.log(tracks);

    const sendData = (uri)=>{
        dispatch(setCurrent(uri));
    }

  return (
    <div className='my-5'>
    <h1 className={`text-xl font-bold mx-5 ${tracks.length === 0 && "hidden"}`}>Tracks</h1>
    <div className="tracks flex flex-wrap justify-around mx-5">
        {
            tracks && 
            tracks.map((track)=>{
                return (
                <div onClick={()=>{sendData(track?.uri)}} className="box my-3 bg-gray-600 rounded-md p-2 flex flex-col justify-around text-white w-36">
                    <img src={track?.album?.images?.[1]?.url} className=' rounded-md w-full' alt="trackImg" />
                    <h1 className='font-bold'>{track?.name}</h1>
                    <h2 className=' text-sm'>{track?.artists?.[0]?.name}</h2>
                </div>
                    )
            })
        }
    </div>
    </div>
  )
}

export default TrackList