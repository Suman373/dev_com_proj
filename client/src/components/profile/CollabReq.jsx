import { useState, useEffect } from 'react'

import { CancelConnectUserIconSVG } from '../../assets/ForProfile'
import { DummyPastCollabRequestsArray, DummyPendingCollabRequestsArray } from '../../data/DummyCollabRequests'

import { TimeGap } from '../../utils/TimeGap'
import { BehanceIconSvg, GitHubIconSvg } from '../../assets/ForHackathonCard'
import { CloseIconSVG } from '../../assets/ForCollab'

const CollabReq = () => {

    const [currentlyShowing, setCurrentlyShowing] = useState('sent')

    const CollabReqCard = ({card}) => {
        return (
            <div className='w-72 h-32 rounded-lg bg-[#1e1e1e]'>
                <div className="flex h-[65%] w-full px-3 gap-2 items-center justify-center">
                    <div className="flex flex-col w-full">
                        <div className="w-full flex justify-between items-center">
                            <p className='text-xl text-white truncate'>
                                {card.project}
                            </p>
                            <div className="flex justify-between items-center gap-5">
                                <GitHubIconSvg/>
                                <BehanceIconSvg/>
                            </div>
                        </div>
                        <p className='text-base font-devcomthin text-[#5C5757] truncate'>
                            {card.username}
                        </p>
                        <div className="flex justify-left items-center gap-3">
                            {
                                card.skills.map((skill, index) => {
                                    return (
                                        <div 
                                            className="px-3 rounded bg-[#154038] text-[#F2F2F2]"
                                            key={index}
                                        >
                                            {skill}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full px-4 py-2 h-[35%]">
                    <span className='text-[#5C5757]'>
                        {TimeGap(card.timestamp)}
                    </span>
                    <div className="px-5 py-1 bg-custom-green rounded-md text-black flex items-center justify-center gap-1">
                        <CloseIconSVG/>
                        <span className=''>Cancel</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="noscroll absolute top-16 left-0 h-[calc(100vh-4rem)] w-full px-10 pt-12 pb-4 flex overflow-hidden font-devcom">
            <div
                id="collabreq-left-panel"
                className="w-2/6 h-full px-2 flex flex-col justify-start items-start gap-16"
            >
                <p className="font-devcombold font-extrabold text-5xl xl:text-6xl text-custom-green">
                    Collab Requests
                </p>
                <div className="flex gap-5">
                    <div 
                        className={`border ${(currentlyShowing === 'sent') ? 'border-custom-green text-custom-green' : 'border-custom-gray text-custom-gray'} rounded-lg px-3 py-1 bg-[#D9D9D9] bg-opacity-10 cursor-pointer`}
                        onClick={() => setCurrentlyShowing('sent')}
                    >
                        Sent
                    </div>
                    <div 
                        className={`border ${(currentlyShowing === 'received') ? 'border-custom-green text-custom-green' : 'border-custom-gray text-custom-gray'} rounded-lg px-3 py-1 bg-[#D9D9D9] bg-opacity-10 cursor-pointer`}
                        onClick={() => setCurrentlyShowing('received')}
                    >
                        Received
                    </div>
                </div>
            </div>
            <div 
                id="collabreq-right-panel"
                className='relative h-full w-4/6 pb-10 overflow-auto noscroll flex flex-col gap-10'
            >
                <div className='h-fit w-full flex flex-col gap-4'>
                    <span className='font-devcom text-custom-gray'>Pending requests:</span>
                    <div className="w-full grid grid-cols-3 gap-4">
                        {
                            DummyPendingCollabRequestsArray.map((request, index) => {
                                return (
                                    <CollabReqCard card={request} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='h-fit w-full flex flex-col gap-4'>
                    <span className='font-devcom text-custom-gray '>Older requests:</span>
                    <div className="w-full grid grid-cols-3 gap-4">
                        {
                            DummyPastCollabRequestsArray.map((request, index) => {
                                return (
                                    <CollabReqCard card={request} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollabReq