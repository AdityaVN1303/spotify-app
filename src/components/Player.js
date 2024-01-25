import React , {useState} from 'react'
import MainContainer from './MainContainer'
import SideBar from './SideBar'
import Footer from './Footer'

const Player = () => {
  const [active, setActive] = useState(true);

  const handleClick = ()=>{
    setActive(!active);
  }

  return (
    <div className="player flex text-white overflow-hidden">
        {active && <SideBar/>}
        <MainContainer/>
        <button onClick={handleClick} className="absolute bottom-24 z-50 lg:hidden left-4 text-3xl">🟢</button>
        <Footer/>
    </div>
  )
}

export default Player