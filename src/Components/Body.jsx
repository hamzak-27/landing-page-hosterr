/**import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4'>
        <div className='min-h-screen flex items-center justify-center -mb-16'>
            <img src='./assets/global-database_11537126.png' alt='logo' className='h-27'></img>
        </div>
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="text-center max-w-lg mx-auto">
                <h1 className='text-5xl font-bold font-playfair leading-tight mb-4'>Host your website in less than 5 minutes</h1>
                <p className='font-lato text-gray-400 mb-6'>With Hoster, get your website up and running in no less than 5 minutes with the most competitive price packages available</p>
                <form action= '' className=' flex felx-col gap-4 mb-6'>
                    <input className='rounded-md px-4 py-3 placeholder:text-gray-400 w-full sm:w-3/4 md:w-2/3 lg:w-1/2'type='email' placeholder='Enter email address'></input>
                    <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2'>Join Waitlist</button>
                </form>
                <div className= 'flex items-center justify-center gap-2 mb-6'>
                    <img src='./assets/checked.png' alt='check' className='h-5'></img>
                    <p className='font-lato text-gray-400 '>No spam ever, Unsubscribe Anytime</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body**/

import React from 'react';

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row space-y-4">
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 md:w-1/2">
        <div className="text-center max-w-lg mx-auto">
          <h1 className='text-5xl font-bold font-playfair leading-tight mb-4'>Host your website in less than 5 minutes</h1>
          <p className='font-lato text-gray-400 mb-6'>With Hoster, get your website up and running in no less than 5 minutes with the most competitive price packages available</p>
          <form action='' className='flex flex-col gap-4 md:flex-row'>
            <input className='rounded-md px-4 py-3 placeholder:text-gray-400 ml-20' type='email' placeholder='Enter email address' />
            <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white ml--4'>Join Waitlist</button>
          </form>
          <div className='flex items-center justify-center gap-2 mb-6'>
            <img src='./assets/checked.png' alt='check' className='h-3'></img>
            <p className='font-lato text-gray-400'>No spam ever, Unsubscribe Anytime</p>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center md:w-1/2">
        <img src='./assets/global-database_11537126.png' alt='logo' className='h-27'></img>
      </div>
    </div>
  );
}

export default Body;

