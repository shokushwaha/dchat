import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
    ChechIfWalletConnected,
    connectWallet,
    connectingWithContract,
} from '../utils/apiFeature'

export const ChatAppContect = React.createContext()

export const ChatAppProvider = ({ children }) => {

    const [account, setAccount] = useState('')
    const [userName, setUserName] = useState('')
    const [friendLists, setFriendLists] = useState([])
    const [friendMsg, setFriendMsg] = useState([])
    const [loading, setLoading] = useState(false)
    const [userLists, setUserLists] = useState([])
    const [error, setError] = useState('')


    const [currentUserName, setCurrentUserName] = useState('')
    const [currentUserAddress, setCurrentUserAddress] = useState('')

    const router = useRouter()


    const fetchData = async () => {
        try {

            const contract = await connectingWithContract()

            const connectAccount = await connectWallet()
            setAccount(connectAccount)

            const userName = await contract.getUsername(connectAccount)
            setUserName(userName)

            const friendLists = await contract.getMyFriendList()
            setFriendLists(friendLists)

            const userList = await contract.getAllAppUser()
            setUserLists(userList)
        } catch (error) {

            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])


    const readMessage = async (friendAddress) => {
        try {
            const contract = await connectingWithContract()
            const read = await contract.readMessage(friendAddress)
            setFriendMsg(read)
        } catch (error) {
            console.log('Currently You Have no Message')
        }
    }


    const createAccount = async ({ name, accountAddress }) => {
        try {
            if (!name)
                return setError("Name  cannot be empty");
            console.log(name)
            const contract = await connectingWithContract()
            const getCreatedUser = await contract.createAccount(name)

            setLoading(true)
            await getCreatedUser.wait()
            setLoading(false)
            window.location.reload()
        } catch (error) {
            console.log(error)
            setError('Error while creating your account Please reload browser')
        }
    }


    const addFriends = async ({ name, accountAddress }) => {
        try {

            const contract = await connectingWithContract()
            const addMyFriend = await contract.addFriend(accountAddress, name)
            setLoading(true)
            await addMyFriend.wait()
            setLoading(false)
            router.push('/')
            window.location.reload()
        } catch (error) {
            setError('Something went wrong while adding friends, try again')
        }
    }


    const sendMessage = async ({ msg, address }) => {
        try {

            const contract = await connectingWithContract()
            const addMessage = await contract.sendMessage(address, msg)
            setLoading(true)
            await addMessage.wait()
            setLoading(false)
            window.location.reload()
        } catch (error) {
            setError('Please reload and try again')
        }
    }


    const readUser = async (userAddress) => {
        const contract = await connectingWithContract()
        const userName = await contract.getUsername(userAddress)
        setCurrentUserName(userName)
        setCurrentUserAddress(userAddress)
    }
    return (
        <ChatAppContect.Provider
            value={{
                readMessage,
                createAccount,
                addFriends,
                sendMessage,
                readUser,
                connectWallet,
                ChechIfWalletConnected,
                account,
                userName,
                friendLists,
                friendMsg,
                userLists,
                loading,
                error,
                currentUserName,
                currentUserAddress,
            }}
        >
            {children}
        </ChatAppContect.Provider>
    )
}
