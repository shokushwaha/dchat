import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Style from "./Chat.module.css";
import images from "../../../assets";
import { converTime } from "../../../Utils/apiFeature";
import { Loader } from "../../index";

const Chat = ({
    functionName,
    readMessage,
    friendMsg,
    account,
    userName,
    loading,
    currentUserName,
    currentUserAddress,
    readUser,
}) => {

    const [message, setMessage] = useState("");
    const [chatData, setChatData] = useState({
        name: "",
        address: "",
    });

    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;
        setChatData(router.query);
    }, [router.isReady]);

    useEffect(() => {
        if (chatData.address) {
            readMessage(chatData.address);
            readUser(chatData.address);
        }
    }, []);

    // console.log(chatData.address, chatData.name);
    return (
        <div className={Style.Chat}>
            {currentUserName && currentUserAddress ? (
                <div className={Style.Chat_user_info}>
                    <Image src={images.accountName} alt="image" width={70} height={70} />
                    <div className={Style.Chat_user_info_box}>
                        <h4>{currentUserName}</h4>
                        <p className={Style.show}>{currentUserAddress}</p>
                    </div>
                </div>
            ) : (
                ""
            )}

            <div className={Style.Chat_box_box}>
                <div className={Style.Chat_box}>
                    <div className={Style.Chat_box_left}>
                        {friendMsg.map((el, i) => (
                            <div>
                                {el.sender == chatData.address ? (
                                    <div className={Style.Chat_box_left_title}>
                                        <Image
                                            src={images.accountName}
                                            alt="image"
                                            width={50}
                                            height={50}
                                        />
                                        <span>
                                            {chatData.name} {""}
                                            <small>Time: {converTime(el.timestamp)}</small>
                                        </span>
                                    </div>
                                ) : (
                                    <div className={Style.Chat_box_left_title}>
                                        <Image
                                            src={images.accountName}
                                            alt="image"
                                            width={50}
                                            height={50}
                                        />
                                        <span>
                                            {userName} {""}
                                            <small>Time: {converTime(el.timestamp)}</small>
                                        </span>
                                    </div>
                                )}
                                <p key={i + 1}>
                                    {el.msg}
                                    {""}
                                    {""}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {currentUserName && currentUserAddress ? (
                    <div className={Style.Chat_box_send}>
                        <div className={Style.Chat_box_send_img}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>

                            <input
                                type="text"
                                placeholder="type your message"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            {loading == true ? (
                                <Loader />
                            ) : (
                                <svg

                                    onClick={() =>
                                        functionName({ msg: message, address: chatData.address })
                                    }
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>

                            )}
                        </div>
                    </div>

                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Chat;
