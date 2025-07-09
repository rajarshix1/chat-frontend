import Link from 'next/link'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-gray-300 text-white font-serif'>
      <div className='w-[550px] h-[550px] m-20 p-12 flex flex-col rounded-xl shadow-gray-800 shadow-2xl justify-center items-center space-y-6 bg-gray-900' >
      <p className='text-3xl text-lime-500'>Sign in</p>
        {/* <label htmlFor="email" className=' font-semibold text-lime-950'>Email/Phone</label> */}
        <div className='flex flex-col space-y-2 text-sm'>
          <input type="text" placeholder='  Enter Email/Phone' className='border-b-2 border-white h-10  w-[300px]'/>
        {/* <label htmlFor="password" className=' font-semibold text-lime-950'>Password</label> */}
        <input type="password" placeholder='  Enter password' className='border-b-2 border-white h-10  w-[300px]' />
        <p className='text-gray-400 text-sm font-thin italic hover:text-lime-400 hover:cursor-pointer ml-2'>Forgot password?</p>
        </div>
        <button className='rounded-full bg-lime-700 text-black text-xl p-2  w-[300px]'>Log in</button>
        <Link href={'/register'}>
        <p className='text-gray-400 text-sm font-thin italic hover:text-white hover:cursor-pointer ml-2 hover:underline'>Don't have an account?      <span className="text-lime-400  ml-1">Sign up</span>
</p>
        </Link>

      </div>
    </div>
  )
}

export default Login