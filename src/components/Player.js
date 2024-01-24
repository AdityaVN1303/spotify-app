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
    <div className="player flex text-white">
        {active && <SideBar/>}
        <MainContainer/>
        <button onClick={handleClick} className="absolute bottom-4 lg:hidden left-4 text-3xl">🟢</button>
        {/* <Footer/> */}
    </div>
  )
}

export default Player