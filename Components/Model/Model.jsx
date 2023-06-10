import React, { useState, useContext } from "react";
import Image from "next/image";
import Style from "./Model.module.css";
import images from "../../assets";
import { ChatAppContect } from "../../Context/ChatAppContext";
import { Loader } from "../../Components/index";

const Model = ({
    openBox,
    title,
    address,
    head,
    info,
    smallInfo,
    image,
    functionName,
}) => {

    const [name, setName] = useState("");
    const [accountAddress, setAccountAddress] = useState("");

    const { loading } = useContext(ChatAppContect);
    return (
        <div className="fixed left-0 top-0 min-h-screen w-screen bg-gray-200 min-w-screen  mx-auto overflow-hidden">
            <div className="grid grid-cols-2 gap-4">
                <div className=" h-screen flex items-center justify-center ">
                    <Image src={image} alt="buddy" width={800} height={800} />
                </div>
                <div className="flex flex-col items-center  justify-center">
                    <h1 className="text-gray-800 font-bold text-4xl flex flex-col items-start">
                        {title} <span className="text-10xl" >{head}</span>
                    </h1>
                    <p className="text-xl mt-2 font-bold" >{info}</p>
                    <small>{smallInfo}</small>

                    {loading == true ? (
                        <Loader />
                    ) : (
                        <div className="flex flex-col gap-2 px-4 py-2">
                            <div className="flex items-center justify-start gap-2 bg-gray-100 px-4 py-2 rounded-md shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>

                                <input
                                    type="text"
                                    placeholder="Name...."
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-gray-100 text-gray-100 placeholder-gray-800 px-4 py-2"
                                />
                            </div>
                            <div className="flex items-center justify-start gap-2 bg-gray-100 px-4 py-2 rounded-md shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>

                                <input
                                    type="text"
                                    placeholder={address || "Enter address.."}
                                    onChange={(e) => setAccountAddress(e.target.value)}
                                    className="bg-gray-100 text-gray-100 placeholder-gray-800 px-4 py-2"
                                />
                            </div>

                            <div className="flex items-center text-white justify-evenly mt-4">
                                <button onClick={() => functionName({ name, accountAddress })}
                                    className="  text-gray-800 flex items-center justify-center gap-2 px-4 py-2 bg-green-400 hover:bg-green-500 rounded-md shadow "
                                >
                                    {""}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>

                                    {""}
                                    Submit
                                </button>

                                <button onClick={() => openBox(false)}
                                    className="text-gray-800 flex items-center justify-center gap-2 px-4 py-2 bg-red-400 hover:bg-red-500 rounded-md shadow "
                                >
                                    {""}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>

                                    {""}
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Model;
