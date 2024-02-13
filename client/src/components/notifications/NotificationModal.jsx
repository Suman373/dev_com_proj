import { useEffect, useState } from 'react'

import { DummyNotificationsArray } from "../../data/DummyNotifications"
import { AcceptUserIcon, RejectUserIcon } from '../../assets/ForNavBar'

const NotificationModal = () => {

    const [notificationsArray, setNotificationsArray] = useState([])

    useEffect(() => {
        setNotificationsArray([...DummyNotificationsArray])
    }, [])

    const acceptConnectUserRequest = (index) => {
        setNotificationsArray([...array.filter((_, ind) => ind !== index)])
    }

    const declineConnectUserRequest = (index) => {
        setNotificationsArray([...array.filter((_, ind) => ind !== index)])
    }

    return (
        <div 
            id="notification-modal"
            className="absolute top-14 border border-gray-400 h-96 w-[380px] p-2 rounded text-white overflow-auto bg-custom-dark"
        >
            {
                notificationsArray?.map((notification, index) => {
                    return (
                        <div className='w-full p-4' key={index}>
                            {
                                (notification.type === 'connect_request') ? 
                                    <div className='flex justify-between items-center'>
                                        <p className='text-gray-400 font-devcom'>
                                            {notification.user} wants to connect.
                                        </p>
                                        <p className='flex justify-between items-center gap-4'>
                                            <span
                                                className='cursor-pointer'
                                                onClick={() => acceptConnectUserRequest(index)}
                                            >
                                                <AcceptUserIcon/>
                                            </span>
                                            <span
                                                className='cursor-pointer'
                                                onClick={() => declineConnectUserRequest(index)}
                                            >
                                                <RejectUserIcon/>
                                            </span>
                                        </p>
                                    </div>
                                :
                                    <div className='flex'>
                                        <p> 
                                            {notification.user}
                                        </p>
                                    </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NotificationModal