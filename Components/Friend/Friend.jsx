import React, { useState, useContext } from "react";
import Card from "./Card/Card";
import Chat from "./Chat/Chat";
import { ChatAppContect } from "../../Context/ChatAppContext";

const Friend = () => {
    const {
        sendMessage,
        account,
        friendLists,
        readMessage,
        userName,
        loading,
        friendMsg,
        currentUserName,
        currentUserAddress,
        readUser,
    } = useContext(ChatAppContect);
    console.log(friendLists);
    return (
        <div className="flex ">
            <div className="flex justify-center gap-10 w-4/5 mx-auto">
                <div className="w-1/3 bg-gray-100 px-4   py-2">
                    {friendLists.map((el, i) => (
                        <Card
                            key={i + 1}
                            el={el}
                            i={i}
                            readMessage={readMessage}
                            readUser={readUser}
                        />
                    ))}
                </div>
                <div className="w-3/5 ">
                    <Chat
                        functionName={sendMessage}
                        readMessage={readMessage}
                        friendMsg={friendMsg}
                        account={account}
                        userName={userName}
                        loading={loading}
                        currentUserName={currentUserName}
                        currentUserAddress={currentUserAddress}
                        readUser={readUser}
                    />
                </div>
            </div>
        </div>
    );
};

export default Friend;
