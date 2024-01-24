import React from 'react'

const SideBarOption = ({options , Icon}) => {
  return (
    <div className="option flex ml-5 space-x-2">
        {
         Icon && <Icon className="text-gray-500 lg:text-xl hover:text-white"/>
        }
        <div className='text-gray-500 lg:text-xl hover:text-white h-12 font-semibold'>{options}</div>
    </div>
  )
}

export default SideBarOption