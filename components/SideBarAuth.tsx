import React from 'react'

type Props = {}

const SideBarAuth = (props: Props) => {
  return (
    <div className='flex flex-col w-full h-full justify-center items-center bg-gray-950 text-white text-5xl text-shadow-pink-800 font-serif'>
        <p className='text-center text-3xl text-lime-50'>
            Welcome to
        </p>
        <p className='text-center text-6xl  text-lime-500'>
           Messenger
        </p>
    </div>
  )
}

export default SideBarAuth