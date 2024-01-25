import React from 'react'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Runner from './Runner'
import { Slider } from '@mui/material';
import { useSelector } from 'react-redux';

const Footer = () => {
  const token = useSelector((store)=>store?.app?.token);
  const uri = useSelector((store)=>store?.app?.current);
  if(!token) return null;
  return (
    <div className="footer z-40 fixed bottom-0 h-20 bg-[#282828] w-full space-x-2 px-5 flex justify-between">
      <div className="left flex space-x-3 items-center">
        <img src="https://upload.wikimedia.org/wikipedia/en/a/af/Alan_Walker_-_On_My_Way.png" className='h-16 w-16 m-2 rounded-md' alt="playImg" />
        <div className='data hidden lg:block'>
          <h1 className='font-semibold'>On My Way</h1>
          <p className='text-sm'>Alan Walker</p>
        </div>

      </div>
      <div className="center">
        <div className="up flex items-center h-full space-x-2">
          <ShuffleIcon fontSize={window.innerWidth > 500 ? "large" : "medium"}/>
          <SkipPreviousIcon fontSize={window.innerWidth > 500 ? "large" : "medium"}/>
          <PlayCircleOutlineIcon fontSize={window.innerWidth > 500 ? "large" : "medium"}/>
          <SkipNextIcon fontSize={window.innerWidth > 500 ? "large" : "medium"}/>
          <RepeatIcon fontSize={window.innerWidth > 500 ? "large" : "medium"}/>
        </div>
        <div className="down">
        </div>
        {/* Premium Account Required for Playing Songs */}
        {/* <Runner trackUri={uri}/> */}


      </div>
      <div className="right hidden lg:flex items-center h-full w-40 space-x-2 mr-5">
      <PlaylistPlayIcon fontSize="large"/>
          <VolumeDownIcon fontSize="large"/>
          <Slider aria-label="Volume" />

      </div>
    </div>
  )
}

export default Footer