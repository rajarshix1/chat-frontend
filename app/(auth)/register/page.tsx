"use client"
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

interface User  {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}
const Register = (props: Props) => {
  const [checkPass, setCheckPass] = useState<string>('')
  const [passInputType, setPassInputType] = useState<{pass1:string, pass2:string}>({pass1:"password", pass2:"password"})
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  })
  useEffect(() => {
    if(user.password.length>0 && user.confirmPassword.length>0){
      if(user.password!==user.confirmPassword){
        setCheckPass("Passwords didnt match")
      }else{
                setCheckPass("")

      }

    }
  }, [user])
  
  console.log(user)
  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-gray-300 text-white font-serif'>
      <div className='w-[550px] h-[550px] m-20 p-12 flex flex-col rounded-xl shadow-gray-800 shadow-2xl justify-center items-center space-y-6 bg-gray-900' >
        <p className='text-3xl text-lime-500'>Create an account</p>
        {/* <label htmlFor="email" className=' font-semibold text-lime-950'>Email/Phone</label> */}
        <div className='space-y-2 text-sm flex flex-col'>
          <input type="text" placeholder='  Enter your name' className='border-b-2 rounded border-white h-10 w-[300px]' onChange={(e) => setUser({ ...user, name: e.target.value })} />
          <input type="text" placeholder='  Enter email address' className='border-b-2 rounded border-white h-10 w-[300px]' onChange={(e) => setUser({ ...user, email: e.target.value })} />
          <input type="text" placeholder='  Enter phone number' className='border-b-2 rounded border-white h-10 w-[300px]' onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} />
          <div className='relative flex items-center justify-center'>
             <input type={passInputType.pass1} placeholder='  Enter password' className='border-b-2 rounded border-white h-10 w-[300px]' onChange={(e) => setUser({ ...user, password: e.target.value })} />
            {passInputType.pass1==="password" ? <Eye size={12} strokeWidth={1} className=' right-1 absolute' onClick={()=>setPassInputType( {...passInputType, pass1: "text"})}/> :
             <EyeOff size={12} strokeWidth={1} className=' right-1 absolute' onClick={()=>setPassInputType({...passInputType, pass1: "password"})}/>}
          </div>
          <div className='relative flex items-center justify-center'>
          <input type={passInputType.pass2} placeholder='  Confirm password' className='border-b-2 rounded border-white h-10 w-[300px]' onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
           {passInputType.pass2==="password" ? <Eye size={12} strokeWidth={1} className=' right-1 absolute' onClick={()=>setPassInputType( {...passInputType, pass2: "text"})}/> :
             <EyeOff size={12} strokeWidth={1} className=' right-1 absolute' onClick={()=>setPassInputType({...passInputType, pass2: "password"})}/>}
          
          </div>
          <p className=' text-[10px] text-red-500'>{checkPass}</p>
        </div>
        <button className='rounded-full bg-lime-700 text-black text-xl p-2 w-[300px]'>Sign up</button>
        <Link href={'/login'}>
          <p className="text-gray-400 text-sm font-thin italic ml-2 hover:text-white hover:cursor-pointer hover:underline">
            Already have an account?
            <span className="text-lime-400 ml-1">Sign in</span>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Register