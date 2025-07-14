"use client"
import { AlignJustify, ChevronLeft, SendHorizontal } from 'lucide-react'
import React, { useState } from 'react'

type Props = {}
const chats = [
    {
        name: "ew er tr",
        image: "",
        message: "sasdfgs dgdasd"
    }, {
        name: "hfgh",
        image: "",
        message: "try erer t tr"
    }, {
        name: "fsd",
        image: "",
        message: "sadavbc erbdfsd"
    }, {
        name: "dfgdfg",
        image: "",
        message: "ertertre tre"
    }, {
        name: "asd",
        image: "",
        message: "sadasd"
    }
]
const Dashboard = (props: Props) => {
    const [selectedChat, setSelectedChat] = useState<{ name: string; image: string; message: string } | null>(null)
    console.log(selectedChat)
    return (
        <div className='flex md:flex-row w-screen h-screen overflow-hidden'>
            <div className={`${selectedChat ? 'hidden' : 'flex flex-col'} border-r-[1px] w-full md:flex md:flex-col md:w-2/7 border-slate-800`}>
                <div className='flex p-1 border-b-[1px] border-slate-800'>
                    <AlignJustify />
                    <input type="text" placeholder='🔍' className='border-1 w-full' />
                </div>
                <div className='flex flex-col overflow-y-auto  min-h-screen mx-1 px-1 pb-4  space-y-2'>
                    {chats.map((e, i) => (
                        <div key={i} onClick={() => setSelectedChat(e)} className='cursor-pointer border-[1px] rounded-lg border-slate-300 p-2'>
                            <p className='font-medium text-lg'>{e.name}</p>
                            <p>{e.message}</p>
                        </div>
                    ))}
                </div>

            </div>
            <div className={`${selectedChat ? 'flex w-full flex-col' : 'hidden'} md:flex min-h-screen md:flex-col  md:w-5/7 border-slate-800`}>
             {selectedChat && 
             <>
                <div className='flex p-1 border-b-[1px] border-slate-800'>
                    <ChevronLeft className='cursor-pointer' onClick={() => setSelectedChat(null)} />
                    <div className='pl-6 flex items-center justify-center'>
                        {selectedChat?.name}
                    </div>
                </div>
                <div className='flex flex-col justify-between flex-1 overflow-hidden'>
                    <div className='flex flex-col space-y-2'>
                        <div className='flex justify-end'>
                            <div className=' border-[1px] rounded-2xl w-fit px-4 '>hi</div>
                        </div>
                        <div className='flex justify-start'>
                            <div className=' border-[1px] rounded-2xl w-fit px-4'>hello</div>
                        </div>
                        <div className='flex justify-start'>
                            <div className=' border-[1px] rounded-2xl w-fit px-4'>how are you</div>

                        </div>
                        <div className='flex justify-end'>
                            <div className=' border-[1px] rounded-2xl w-fit px-4 '>good</div>

                        </div>
                        <div className='flex justify-end'>
                            <div className=' border-[1px] rounded-2xl w-fit px-4 '>byebye</div>

                        </div>

                    </div>
                    <div className="p-2 border-t border-slate-300 flex">
                        <textarea placeholder='Enter message here' className='w-full border-[1px] rounded-xl p-1' />
                        <SendHorizontal />
                    </div>
                </div>
                </>}
                {!selectedChat && <div className='h-full flex justify-center items-center'>Select a chat to view messages</div>}
            </div>
        </div>
    )
}

export default Dashboard