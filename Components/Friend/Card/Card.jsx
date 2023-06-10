import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../../../assets";

const Card = ({ readMessage, el, i, readUser }) => {
    console.log(el);
    return (
        <Link
            href={{
                pathname: "/",
                query: { name: `${el.name}`, address: `${el.pubkey}` },
            }}
        >
            <div
                className=" bg-gray-200 rounded-md shadow flex items-center gap-4 px-4 py-2 border-b-4 border-gray-400"
                onClick={() => (readMessage(el.pubkey), readUser(el.pubkey))}
            >

                <div className="">
                    <Image
                        src={images.accountName}
                        alt="username"
                        width={50}
                        height={50}
                        className="shadow-md shadow-yellow-400 rounded-[50%]"
                    />
                </div>
                <div className="">
                    <div className="">
                        <h4 className="text-xl font-bold">{el.name}</h4>
                        <small className="text-gray-400">{el.pubkey.slice(21)}....</small>
                    </div>

                </div>

            </div>
        </Link>
    );
};

export default Card;
