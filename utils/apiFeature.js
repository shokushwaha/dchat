import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { ChatAppAddress, ChatAppABI } from "../Context/constants";

export const ChechIfWalletConnected = async () => {
    try {
        if (!window.ethereum) return console.log("Install MateMask");

        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error);
    }
};

export const connectWallet = async () => {
    try {

        git
        if (!window.ethereum) return console.log("Install MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error);
    }
};

const fetchContract = (signerOrProvider) =>
    new ethers.Contract("0x1E998489e83D5C5734b37bB2cCAceB71F6b191d9", ChatAppABI, signerOrProvider);

export const connectingWithContract = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

export const converTime = (time) => {
    const newTime = new Date(time.toNumber());

    const realTime =
        newTime.getHours() +
        "/" +
        newTime.getMinutes() +
        "/" +
        newTime.getSeconds() +
        "  Date:" +
        newTime.getDate() +
        "/" +
        (newTime.getMonth() + 1) +
        "/" +
        newTime.getFullYear();

    return realTime;
};
