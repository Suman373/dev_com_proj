import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2'
import { useState, useEffect, useRef } from 'react'
  
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

import NavBar from "../../constants/NavBar"
import ConnectReq from '../../components/profile/ConnectReq';
import CollabReq from '../../components/profile/CollabReq';
import ProfileBG from "./ProfileBG"
import profileimg from "../../assets/profile.png"
import './profile.css'

import { DummyUser, DummyUserData } from "../../data/DummyUser"
import { skillSetSvgs } from '../../assets/SkillSetSVGs';
import { ProjectExpCard, WorkExpCard, WorkExpCardTag, coloredSvgsForProjectCard } from "../../assets/ForProfile"
import { BehanceIconSvg, GitHubIconSvg } from '../../assets/ForHackathonCard';
import Skillset from '../../components/profile/Skillset';


const Profile = () => {

    const [selectedSection, setSelectedSection] = useState('skillset')

    const changeSelectedSection = (section) => {
        setSelectedSection(section)
    }

    return (
        <div className="nav-blur noscroll w-screen h-screen overflow-y-auto">
            <ProfileBG/>
            <NavBar/>
            <div className="fixed top-20 left-12 text-custom-gray text-lg flex justify-evenly items-center gap-10 bg-gradient-to-r from-custom-dark to-transparent z-10">
                <span 
                    className={`${(selectedSection === 'skillset') && 'border-b-2 border-custom-green'} cursor-pointer`}
                    onClick={() => changeSelectedSection('skillset')}
                >
                    skillset
                </span>
                <span 
                    className={`${(selectedSection === 'connect-req') && 'border-b-2 border-custom-green'} cursor-pointer`}
                    onClick={() => changeSelectedSection('connect-req')}
                >
                    connect req.
                </span>
                <span 
                    className={`${(selectedSection === 'collab-req') && 'border-b-2 border-custom-green'} cursor-pointer`}
                    onClick={() => changeSelectedSection('collab-req')}
                >
                    collab req.
                </span>
            </div>
            {
                (selectedSection === 'skillset') ?
                    <Skillset/>
                :
                    (selectedSection === 'connect-req') ?
                        <ConnectReq/>
                    :
                        <CollabReq/>
            }
            
        </div>
    )
}

export default Profile