import React, { useState, useEffect, useContext } from "react";
//INTRNAL IMPORT
import { UserCard } from "../Components/index";
import Style from "../styles/alluser.module.css";
import { ChatAppContect } from "../Context/ChatAppContext";

const alluser = () => {
    const { userLists, addFriends } = useContext(ChatAppContect);
    return (
        <div className="w-4/5 mx-auto mt-4">
            <div className="">
                <div className={Style.container}>
                    <div className={Style.content}>
                        <div className={Style.content__container}>
                            <p className={Style.content__container__text}>
                                Find
                            </p>

                            <ul className={Style.content__container__list}>
                                <li className={Style.content__container__list__item}>friends!</li>
                                <li className={Style.content__container__list__item}>mates!</li>
                                <li className={Style.content__container__list__item}>users !</li>
                                <li className={Style.content__container__list__item}>DCHAT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {userLists.map((el, i) => (
                    <UserCard key={i + 1} el={el} i={i} addFriends={addFriends} />
                ))}
            </div>
        </div>
    );
};

export default alluser;
