import React, { useState, useEffect, useContext } from "react";
//INTRNAL IMPORT
import { UserCard } from "../Components/index";
import Style from "../styles/alluser.module.css";
import { ChatAppContect } from "../Context/ChatAppContext";

const alluser = () => {
    const { userLists, addFriends } = useContext(ChatAppContect);
    return (
        <div className={Style.alluser_box}>
            <div className={Style.alluser_info}>
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

            <div className={Style.alluser}>
                {userLists.map((el, i) => (
                    <UserCard key={i + 1} el={el} i={i} addFriends={addFriends} />
                ))}
            </div>
        </div>
    );
};

export default alluser;
