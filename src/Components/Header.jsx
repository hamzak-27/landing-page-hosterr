import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className = 'flex justify-between'>
        <div className = 'flex items-center justify-center gap-2'>
            <img src='./assets/logo-2.png' alt='logo' className="w-9 h-9 object-cover"></img>
            <h2 className="text-2xl font-bold text-black-600 tracking-wide">Hosterr</h2>
            <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl'>We are hiring!</button>

        </div>
        <ul className=' flex justify-between items-center font-lato text-gray-400 gap-6'>
            <li><a href='#'>Plans</a></li>
            <li><a href='#'>Find Domain</a></li>
            <li><a href='#'>Why Hoster</a></li>
        </ul>
        <div className='flex justify-center items-center font-lato gap-6'>
            <a className='text-gray-400' href='#'>Sign In</a>
            <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
        </div>
        
    </div>
  )
}

export default Header