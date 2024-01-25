import React from 'react'
import Header from './Header'
import ListComponent from './ListComponent'

const MainContainer = () => {

  return (
    <div className=' w-full h-screen lg:w-4/5 bg-slate-600 bg-gradient-to-t from-black overflow-y-scroll scrollbar-hide'>
      <Header/>
      <ListComponent/>
    </div>
  )
}

export default MainContainer