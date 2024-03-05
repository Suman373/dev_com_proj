import { useState, useEffect } from 'react'

import { 
    DummyPendingSentConnectionRequestsArray, 
    DummyPastSentConnectionRequestsArray,
    DummyPendingReceivedConnectionRequestsArray,
    DummyPastReceivedConnectionRequestsArray, 
    AllConnectionsArray
} from '../../data/DummyConnectRequests';
import { CancelConnectUserIconSVG } from '../../assets/ForProfile';

import { TimeGap } from '../../utils/TimeGap';
import { skillSetSvgs } from '../../assets/SkillSetSVGs';
import { ConnectionCardChatIconSVG, ConnectionCardRemoveConnectionIconSVG } from '../../assets/ForConnect';

const ConnectReq = () => {

    const [currentlyShowing, setCurrentlyShowing] = useState('sent')

    const SentConnectReqCard = ({card}) => {
        return (
            <div className='w-72 rounded-lg bg-[#1E1E1E] py-2'>
                <div className="flex h-[65%] w-full p-2 gap-2 items-center justify-center">
                    <img 
                        className='h-12 w-12 rounded-full'
                        src={card.dp} alt="" 
                    />
                    <div className="flex flex-col w-full">
                        <p className='text-2xl text-white truncate'>
                            {card.username}
                        </p>
                        <p className='text-sm font-devcomthin text-[#5C5757] truncate'>
                            {card.bio}
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full px-4 py-2 h-[35%]">
                    <span className='text-[#5C5757]'>
                        {TimeGap(card.timestamp)}
                    </span>
                    <div className="px-5 py-1 bg-custom-green rounded-md text-black flex items-center justify-center gap-1">
                        <CancelConnectUserIconSVG/>
                        <span className=''>Cancel</span>
                    </div>
                </div>
            </div>
        )
    }

    const ConnectReqSentSection = () => {
        return (
            <>
                <div className='h-fit w-full flex flex-col gap-4'>
                    <span className='font-devcom text-custom-gray'>Pending requests:</span>
                    <div className="w-full grid grid-cols-3 gap-4">
                        {
                            DummyPendingSentConnectionRequestsArray.map((request, index) => {
                                return (
                                    <SentConnectReqCard card={request} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='h-fit w-full flex flex-col gap-4'>
                    <span className='font-devcom text-custom-gray '>Older requests:</span>
                    <div className="w-full grid grid-cols-3 gap-4">
                        {
                            DummyPastSentConnectionRequestsArray.map((request, index) => {
                                return (
                                    <SentConnectReqCard card={request} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }

    const ReceivedConnectReqCard = ({card}) => {
        return (
            <div className='w-72 rounded-lg bg-[#1E1E1E] p-1'>
                <div className="flex w-full p-2 gap-3 items-center justify-center">
                    <img 
                        className='h-12 w-12 rounded-full'
                        src={card.dp} alt="" 
                    />
                    <div className="flex flex-col w-full">
                        <p className='text-xl text-white truncate'>
                            {card.username}
                        </p>
                        <p className='text-sm font-devcomthin text-[#5C5757] truncate'>
                            {card.bio}
                        </p>
                        <p className='text-sm font-devcomthin text-[#5C5757]'>
                            {TimeGap(card.timestamp)}
                        </p>
                    </div>
                </div>
                { 
                    (card.status) ? 
                        (card.status === 'accepted') ?
                            <span className='text-custom-green text-left text-base font-sm'>
                                {'Accepted '} {TimeGap(card.timestamp)}
                            </span>
                        :
                            <span className='text-custom-red text-left text-base font-sm'>
                                {'Rejected '} {TimeGap(card.timestamp)}
                            </span>
                    :
                        <div className="flex items-center justify-between w-full px-2 py-2 gap-2 font-devcomthin font-thin">
                            <div className="border border-custom-green flex-1 py-1 text-custom-green rounded text-center text-sm">
                                Accept
                            </div>
                            <div className="border border-custom-red flex-1 py-1 text-custom-red rounded text-center text-sm">
                                Reject
                            </div>
                        </div>
                }
            </div>
        )
    }

    const ConnectReqReceivedSection = () => {
        return (
            <>
                <div className='h-fit w-full flex flex-col gap-4'>
                    <span className='font-devcom text-custom-gray'>Pending requests:</span>
                    <div className="w-full grid grid-cols-3 gap-4">
                        {
                            DummyPendingReceivedConnectionRequestsArray.map((request, index) => {
                                return (
                                    <ReceivedConnectReqCard card={request} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='h-fit w-full flex flex-col gap-4'>
                    <span className='font-devcom text-custom-gray '>Older requests:</span>
                    <div className="w-full grid grid-cols-3 gap-4">
                        {
                            DummyPastReceivedConnectionRequestsArray.map((request, index) => {
                                return (
                                    <ReceivedConnectReqCard card={request} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }

    const ConnectionCard = ({card}) => {
        return (
            <div className='w-72 rounded-lg bg-[#1E1E1E] flex flex-col'>
                <div className="flex w-full p-2 gap-3 items-center justify-center">
                    <img 
                        className='h-12 w-12 rounded-full'
                        src={card.dp} alt="" 
                    />
                    <div className="flex flex-col w-full">
                        <p className='text-xl text-white truncate'>
                            {card.username}
                        </p>
                        <p className='text-sm font-devcomthin text-[#5C5757] truncate'>
                            {card.bio}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3 bg-[#181818] p-2">
                    {
                        card.skills.map((skill, index) => {
                            return (
                                <div className='' key={index}>
                                    {skillSetSvgs[skill]}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-between items-center p-2 gap-3">
                    <div className="h-8 flex justify-center items-center cursor-pointer bg-custom-green text-black rounded flex-1 gap-2">
                        <ConnectionCardChatIconSVG/>
                        Chat
                    </div>
                    <div className='h-8 flex justify-center items-center cursor-pointer border bg-[
#181A1B] border-custom-red text-custom-red rounded flex-1 gap-2'>
                        <ConnectionCardRemoveConnectionIconSVG/>
                        Remove
                    </div>
                </div>
            </div>
        )
    }

    const AllConnections = () => {
        return (
            <div className='h-fit w-full grid grid-cols-3 gap-4'>
                {
                    AllConnectionsArray.map((connection, index) => {
                        return (
                            <ConnectionCard card={connection} key={index}/>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className="noscroll absolute top-16 left-0 h-[calc(100vh-4rem)] w-full px-10 pt-12 pb-4 flex overflow-hidden font-devcom ">
            <div
                id="connectreq-left-panel"
                className="w-2/6 h-full px-2 flex flex-col justify-start items-start gap-16"
            >
                <p className="font-devcombold font-extrabold text-5xl xl:text-6xl text-custom-green">
                    Connection Requests
                </p>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div 
                            className={`border ${(currentlyShowing === 'sent') ? 'border-custom-green text-custom-green' : 'border-custom-gray text-custom-gray'} rounded px-10 py-1 bg-[#D9D9D9] bg-opacity-10 cursor-pointer text-xl`}
                            onClick={() => setCurrentlyShowing('sent')}
                        >
                            Sent
                        </div>
                        <div 
                            className={`border ${(currentlyShowing === 'received') ? 'border-custom-green text-custom-green' : 'border-custom-gray text-custom-gray'} rounded px-10 py-1 bg-[#D9D9D9] bg-opacity-10 cursor-pointer text-xl`}
                            onClick={() => setCurrentlyShowing('received')}
                        >
                            Received
                        </div>
                    </div>
                    <div 
                        className={`border ${(currentlyShowing === 'all') ? 'border-custom-green text-custom-green' : 'border-custom-gray text-custom-gray'} rounded px-10 py-1 bg-[#D9D9D9] bg-opacity-10 cursor-pointer text-xl w-fit`}
                        onClick={() => setCurrentlyShowing('all')}
                    >
                        All Connections
                    </div>
                </div>
            </div>
            <div 
                id="connectreq-right-panel"
                className='relative h-full w-4/6 pb-10 overflow-auto noscroll flex flex-col gap-10'
            >
                {
                    (currentlyShowing === 'sent') ?
                        <ConnectReqSentSection/>
                    : 
                        (currentlyShowing === 'received') ?
                            <ConnectReqReceivedSection/>
                        :
                            (currentlyShowing === 'all') ?
                                <AllConnections/>
                            :
                                <></> 
                }
            </div>
        </div>
    )
}

export default ConnectReq