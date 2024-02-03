import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './hackathons.css'

import { DummyHackathonsAndProjectsArray } from '../../data/DummyHackathonsAndProjects'

// bg
import HackathonsBG from './HackathonsBG'

// svgs
import NavBar from '../../constants/NavBar'
import HackFooter from '../../components/hackathons/footer/HackFooter'
import HackathonOrProjectCard from '../../components/hackathons/cards/HackathonOrProjectCard'

const Hackathons = () => {

    // NECESSARIES FOR SLASH PROPMT POPUP

    const [slashPromptOpen, setSlashPromptOpen] = useState(true)

    const toggleSlashPromptOpen = () => {
        setSlashPromptOpen((promptOpen) => !promptOpen)
    }
    
    useEffect(() => {
        const handleSlashPress = (e) => {
            if (e.key === 'Slash' || e.code === 'Slash') {
                toggleSlashPromptOpen()
                // console.log('slashed')
            }
        }
        window.addEventListener('keydown', handleSlashPress)
        return () => {
            window.removeEventListener('keydown', handleSlashPress)
        }
    }, [])

    // NECESSARIES FOR FETCHING DATA

    const [dummyHackathonsAndProjectsArray, setDummyHackathonsAndProjectsArray] = useState([])

    useEffect(() => {
        setDummyHackathonsAndProjectsArray([...DummyHackathonsAndProjectsArray])
    }, [])  

    return (
        <>
            <HackathonsBG/>
            <NavBar currentPath={window.location.pathname}/>
            <div className="bg-transparent absolute top-20 left-0 h-[calc(100vh-10rem)] px-12 pt-4 pb-24 w-full flex items-center justify-center">
                <div className="h-full w-full bg-transparent grid grid-cols-3 grid-rows-2 gap-8">
                    {
                        dummyHackathonsAndProjectsArray.map((item, index) => (
                            <HackathonOrProjectCard cardDetails={item} key={index}/>
                        ))   
                    }
                </div>
            </div>
           
            <HackFooter slashPromptOpen={slashPromptOpen}/>
        </>
    )
}

export default Hackathons