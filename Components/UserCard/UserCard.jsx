import React from "react";
import Image from "next/image";

import images from "../../assets";
const UserCard = ({ el, i, addFriends }) => {
    console.log(el);
    return (
        <div className="bg-gray-200 px-4 py-2 mt-4 rounded-md shadow border-b-4  border-gray-400">
            <div className="">
                <Image
                    className="rounded-[50%] shadow-md shadow-yellow-400 mx-auto"
                    src={images[`image${i + 1}`]}
                    alt="user"
                    width={100}
                    height={100}
                />

                <div className="flex flex-col items-center justify-center mt-4">
                    <h3 className="text-2xl font-bold mb-2" >{el.name}</h3>
                    <p className="text-gray-800" >{el.accountAddress.slice(0, 25)}....</p>
                    <button
                        onClick={() =>
                            addFriends({ name: el.name, accountAddress: el.accountAddress })
                        }
                        className="bg-yellow-200 px-4 py-2 rounded-md shadow hover:bg-yellow-400 mt-2 mx-auto"
                    >
                        Add Friend
                    </button>
                </div>
            </div>


        </div>
    );
};

export default UserCard;
