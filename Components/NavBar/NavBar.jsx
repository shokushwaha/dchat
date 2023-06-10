import React, { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChatAppContect } from '../../Context/ChatAppContext'
import { Model, Error, Loader } from '../index'
import images from '../../assets'
export const NavBar = () => {
    const menuItems = [
        {
            menu: 'All Users',
            link: '/allusers',
        },
        {
            menu: 'CHAT',
            link: '/',
        },

    ]

    const [active, setActive] = useState(2)
    const [open, setOpen] = useState(false)
    const [openModel, setOpenModel] = useState(false)

    const { account, userName, connectWallet, createAccount, error } = useContext(
        ChatAppContect,
    )
    return (
        <>
            <div className="bg-neutral-800 mt-4 px-28 py-4 text-gray-400 flex items-center justify-evenly w-4/5 mx-auto rounded-md shadow ">

                <div className="flex items-center gap-40 ">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>

                    </div>
                    <div className="flex items-center justify-around ">
                        <div className="flex items-center justify-center  px-4 py-2 ">
                            {menuItems.map((el, i) => (
                                <div
                                    onClick={() => setActive(i + 1)}
                                    key={i + 1}
                                    className="mx-10"
                                >
                                    <Link
                                        className=""
                                        href={el.link}
                                    >
                                        {el.menu}
                                    </Link>
                                </div>
                            ))}
                        </div>





                        <div className="flex  bg-gray-200 rounded-md shadow px-4 py-2">
                            {account == '' ? (
                                <button onClick={() => connectWallet()}>
                                    {''}
                                    <span>Connect Wallet</span>
                                </button>
                            ) : (
                                <button onClick={() => setOpenModel(true)}
                                    disabled={account}
                                    className='flex items-center px-4 py-2 text-gray-800 '
                                >
                                    {''}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>

                                    {''}
                                    <small>{userName || 'Create Account'}</small>
                                </button>
                            )}
                        </div>


                    </div>
                </div>

                {error == '' ? '' : <Error error={error} />}
            </div >
            {openModel && (


                <Model
                    openBox={setOpenModel}
                    title="DChat"
                    head="Secure communication!"
                    info=""
                    smallInfo="P2P"
                    image={images.hero}
                    functionName={createAccount}
                    address={account}
                />

            )}
        </>
    )
}

export default NavBar
