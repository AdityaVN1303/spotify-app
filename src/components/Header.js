import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import {addTracks , addArtists} from '../utils/appSlice'


const Header = () => {

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const token = useSelector((store)=> store?.app?.token);
    const spotify = new SpotifyWebApi();


    useEffect(() => {
      if(token && search){
        spotify.setAccessToken(token);
        spotify.searchTracks(search).then((res)=>{
          // console.log(res?.tracks?.items);
          dispatch(addTracks(res?.tracks?.items));
        })
        spotify.searchArtists(search).then((res)=>{
          // console.log(res?.artists?.items);
          dispatch(addArtists(res?.artists?.items));
        })
      }
    }, [search])

    if(!token) return null;
    

  return (
    <div className="header  my-5 mx-5 outline-none">
       <div className="up flex space-x-5 justify-between items-cente">
       <div className='w-3/4 lg:w-4/5 flex items-center bg-white rounded-full px-2'>
        <SearchIcon className='text-gray-700'/>
        <input placeholder='Search for Artists , Songs, Podcasts' className='rounded-full focus:border-none w-full  p-2 text-black' type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
        <div className='flex space-x-2 w-1/3 lg:w-1/4 items-center justify-center'>
        <AccountCircleIcon fontSize={window.innerWidth > 500 ? "large" : "medium"}/>
        <h1 className='font-semibold lg:text-xl'>Aditya</h1>
        </div>
       </div>
    </div>
  )
}

export default Header