import React from 'react'
import Header from './Header'
import ListComponent from './ListComponent'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useDispatch, useSelector } from 'react-redux';
import Song from './Song'
import { setCurrent, setCurrentArtist, setInfo } from '../utils/appSlice';

const MainContainer = () => {

  const isTrue = useSelector((store)=> store?.app?.info);
  const dispatch = useDispatch()

  return (
    <div className=' w-full h-screen lg:w-4/5 bg-slate-600 bg-gradient-to-t from-black overflow-y-scroll scrollbar-hide'>
      <Header/>
      { isTrue &&
        <div onClick={()=>{
          dispatch(setInfo(false));
          dispatch(setCurrent({}));
          dispatch(setCurrentArtist({}));

          }}>
          <ArrowLeftIcon fontSize='large' className='ml-10 bg-purple-950 rounded-full cursor-pointer'/>
        </div>
      }
      {
        isTrue ? <Song/> :
        <ListComponent/>
      }
    </div>
  )
}

export default MainContainer