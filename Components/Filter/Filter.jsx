import React, { useState, useContext } from 'react'
import Image from 'next/image'
import images from '../../assets'
import { ChatAppContect } from '../../Context/ChatAppContext'
import { Model } from '../index'
const Filter = () => {
    const { account, addFriends } = useContext(ChatAppContect)
    const [addFriend, setAddFriend] = useState(false)
    return (
        <div className="w-4/5 mx-auto px-4 py-2">
            <div className="flex items-center justify-between">



                <input type="text" placeholder="Search...." className='bg-gray-200 rounded-md px-4 py-2 shadow border-none outline-none' />


                <div className="flex items-center justify-center gap-4">
                    <button className='flex items-center justify-center gap-2 bg-red-200 hover:bg-red-400 px-4 py-2 rounded-md shadow' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        <span>

                            CLEAR CHAT
                        </span>
                    </button>
                    <button onClick={() => setAddFriend(true)}
                        className="flex items-center justify-center gap-2 bg-green-200 hover:bg-green-400 px-4 py-2 rounded-md shadow"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>

                        ADD FRIEND
                    </button>
                </div>
            </div>
            {
                addFriend && (
                    <div className="">
                        <Model
                            openBox={setAddFriend}
                            title="Welcome to"
                            head="Chat With Privacy"
                            info=""
                            smallInfo="Enter Your Friend Name & Address.."
                            image={images.hero}
                            functionName={addFriends}
                        />
                    </div>
                )
            }
        </div >
    )
}

export default Filter
