import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Loader.module.css";
import images from "../../assets";

const Loader = () => {
    return (
        <>
            <div className={Style.loader}>
                <span className={Style.bar}></span>
                <span className={Style.bar}></span>
                <span className={Style.bar}></span>
            </div>
        </>
    );
};

export default Loader;
