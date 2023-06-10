import React, { useEffect, useState, useContext } from "react";
import { Filter, Friend } from "../Components/index";
import { Toaster, toast } from 'react-hot-toast'
const ChatApp = () => {

  useEffect(() => {

    toast('We are only running our services on Goerli Testnet!', {
      icon: '🤘',
    });
  }, []);


  return (
    <>
      <Toaster

        toastOptions={{
          className: '',
          style: {
            padding: '16px',
            color: 'blue',
            backgroundColor: "azure",
            boxShadow: "0px 0px 20px gray"
          },
        }}
      />
      <Filter />
      <Friend />
    </>
  );
};

export default ChatApp;
