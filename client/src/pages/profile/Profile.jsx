import NavBar from "../../constants/NavBar"
import ProfileBG from "./ProfileBG"

import './profile.css'

import { DummyUser, DummyUserData } from "../../data/DummyUser"

const Profile = () => {

    return (
        <>
            <ProfileBG/>
            <NavBar currentPath={window.location.pathname}/>
            <div className="noscroll w-full h-[calc(100vh-5rem)] overflow-y-auto flex flex-col items-center justify-evenly gap-10 font-devcom">
                <div className="profile-hero-1 w-full h-[calc(100vh-5rem)] flex items-center">
                    <div className="about-me w-1/4 h-full px-10 py-32 flex flex-col items-center gap-16">
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-custom-green">About me</p>
                            <p className=" text-left" style={{color: '#D9D9D9'}}>
                                {DummyUserData.about}
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-custom-green">Location</p>
                            <p className="text-left" style={{color: '#D9D9D9'}}>
                                {DummyUserData.location}
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <div className="h-[44rem] w-[44rem]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44rem" height="44rem">
                                <circle cx="22rem" cy="22rem" r="21.72rem" stroke="#5BD45C" opacity="0.05" fill="none"/>
                                <circle cx="22rem" cy="22rem" r="18.22rem" stroke="#5BD45C" opacity="0.2" fill="none"/>
                                <circle cx="22rem" cy="22rem" r="14.56rem" stroke="#5BD45C" opacity="0.4" fill="none"/>
                                <circle cx="22rem" cy="22rem" r="10.88rem" stroke="#5BD45C" opacity="0.6" fill="none"/>
                                <circle cx="22rem" cy="22rem" r="7.22rem" stroke="#5BD45C" opacity="1" fill="none"/>
                            </svg>
                        </div>
                    </div>
                    <div className="w-1/4 h-full px-10 py-32 flex flex-col items-center gap-16">
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-custom-green">Portfolio</p>
                            <p className="text-left underline hover:cursor-pointer hover:text-sky-900" style={{color: '#D9D9D9'}}>
                                {DummyUserData.portfolio}
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-custom-green">Hack Streak</p>
                            <div className="grid grid-cols-11 gap-1">
                                {
                                    Array(44).fill().map((_, index) => {
                                        return (
                                            <div index={index}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height={26} width={26}>
                                                    <circle cx="13" cy="13" r="10" fill={`${(index % 2 !== 0) ? '#5BD45C' : '#42403b'}`}/>
                                                </svg>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile