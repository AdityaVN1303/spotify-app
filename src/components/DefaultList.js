import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import { setCurrent, setInfo } from '../utils/appSlice';

const DefaultList = () => {

    const spotify = new SpotifyWebApi();
    const dispatch = useDispatch();
    const token = useSelector((store)=> store?.app?.token);
    const [newList, setNewList] = useState([]);

    const sendData = (track)=>{
        dispatch(setCurrent(track));
        dispatch(setInfo(true));

    }

    useEffect(() => {
        spotify.setAccessToken(token);
        spotify.getNewReleases().then((res)=>{
            console.log(res?.albums?.items);
            setNewList(res?.albums?.items);
          })
    }, [])
    

  return (
    <div className='my-5 new-release'>
    <h1 className={`text-xl font-bold mx-5 ${newList.length === 0 && "hidden"}`}>New Releases</h1>
    <div className="tracks flex flex-wrap justify-around mx-5">
        {
            newList && 
            newList.map((track)=>{
                return (
                <div key={track?.id} onClick={()=>{sendData(track)}} className="box my-3 bg-gray-600 rounded-md p-2 flex flex-col justify-around text-white w-36">
                    <img src={track?.images?.[1]?.url} className=' rounded-md w-full' alt="trackImg" />
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

export default DefaultList