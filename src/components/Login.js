import React from 'react'
import { loginUrl} from '../utils/spotify'
import { logo } from '../utils/constants'


const Login = () => {
    

  return (
    <div className='h-screen bg-black flex flex-col justify-around items-center '>
    <div className="login ">
        <img className='w-full' src={logo} alt="logo" />
    </div>
    <a href={loginUrl}>
    <button className='text-white font-bold bg-yellow-500 p-4 rounded-full lg:p-6'>LOGIN WITH SPOTIFY</button>
    </a>
    </div>
  )
}

export default Login