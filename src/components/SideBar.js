import React from 'react'
import {logo} from '../utils/constants'
import SideBarOption from './SideBarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useSelector } from 'react-redux';

const SideBar = () => {

    const playlists = useSelector((store)=> store?.app?.playlist);
    const playArr = playlists?.items;

  return (
    <div className='w-1/2 absolute lg:static lg:w-1/5 py-3 bg-black h-screen px-2'>
        <img className='w-full my-2' src={logo} alt="logo" />
        <div className="options my-8">
            <SideBarOption Icon={HomeIcon} options={"Home"}/> 
            <SideBarOption Icon={SearchIcon} options={"Search"}/>   
            <SideBarOption Icon={LibraryMusicIcon} options={"Your Library"}/>  
        </div>
        <h1 className='ml-5 text-lg my-2 font-semibold'>Playlists</h1>
        <hr/>
        <div className="options my-8">
            {
                playArr && 
                playArr.map((item)=>{
                    return (
                        <SideBarOption options={item?.name} key={item?.id}/> 
                    )
                })
            }
        </div>



    </div>
  )
}

export default SideBar