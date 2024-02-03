import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

// context
import { UserContext } from '../contexts/UserState'

// dummy data
import { DummyUser } from '../data/DummyUser'

// svgs
import { NavDevCom } from "../assets/ForNavBar"

const NavBar = ({currentPath}) => {

    // NECESSARIES FOR USER DATA

    const userContext = useContext(UserContext)
    const [dummyUser, setDummyUser] = useState(DummyUser)

    useEffect(() => {
        setDummyUser(DummyUser)
    }, [])

    // NECESSARIES FOR NAVIGATION

    const navigate = useNavigate()

    const handleNavigation = (path) => {
        navigate(`/${path}`)
    }

    // NECESSARIES HAM MENU MODAL

    const handleHamToggle = () => {

    }

    const [displayLink, setDisplayLink] = useState()

    function formatLink(link) {
        let upperCaseActive = true
        let formattedLink = ""
        for (let i = 0; i < link.length; i++) {
            let letter = link[i]
            if (letter === ' ') {
                upperCaseActive = true
                continue
            } 
            if (upperCaseActive) {
                formattedLink += letter.toString().toUpperCase()
                upperCaseActive = false
            } else {
                formattedLink += letter.toString()
            }
        }
        return formattedLink
    }

    useEffect(() => {
        if (currentPath !== null && currentPath?.length > 0) {
            let actualPath = currentPath?.slice(1, currentPath.length)
            setDisplayLink(formatLink(actualPath))
        }
    }, [])

    return (
        <div className="w-full h-20 flex justify-between px-12 items-center bg-transparent text-white font-devcom">
            {
                (userContext.loggedIn) ?
                    (
                        <div 
                            className="p-2 rounded-lg hover:cursor-pointer hover:bg-custom-hover"
                            onClick={() => handleHamToggle()}
                        >
                            <div className="nav-ham z-0 w-10 h-4 border-t-2 border-b-2"
                            >
                            </div>
                        </div>
                    )
                : 
                    <NavDevCom/>
            }

            {
                (userContext.loggedIn) ? 
                    <div className="absolute top-0 left-0 h-20 -z-10 w-full flex justify-center gap-2 items-center">
                        <NavDevCom/>
                        {
                            (currentPath !== null && currentPath?.length > 0) && 
                                <div className='flex gap-2 text-custom-green'>
                                    <p className="text-3xl font-extrabold">
                                        /
                                    </p>
                                    <p className="underline text-custom-green text-3xl font-extrabold">
                                        {displayLink}
                                    </p>
                                </div>
                        }
                    </div>
                :
                    <div className="navbar-center-buttons h-full w-1/5 flex justify-evenly gap-2 items-center">
                        <div
                            className='py-2 px-4 flex justify-center items-center text-xl rounded-2xl hover:bg-custom-hover hover:cursor-pointer'
                            onClick={() => handleNavigation('hackathons')}
                        >
                            hackathons
                        </div>
                        <div
                            className='py-2 px-4 flex justify-center items-center text-xl rounded-2xl  hover:bg-custom-hover hover:cursor-pointer'
                            onClick={() => handleNavigation('blogs')}
                        >
                            blogs
                        </div>
                        <div
                            className='py-2 px-4 flex justify-center items-center text-xl rounded-2xl hover:bg-custom-hover hover:cursor-pointer'
                            onClick={() => handleNavigation('chat')}
                        >
                            chat
                        </div>
                    </div>
            }
            {
                (userContext.loggedIn) ?
                    <>
                        {
                            (userContext.user.dp?.length > 0) ?
                                <div 
                                    className="relative w-10 h-10 rounded-full overflow-hidden hover:cursor-pointer hover:scale-110"
                                    onClick={() => userContext.logoutUser()}
                                >
                                    <img 
                                        className='w-full h-full' 
                                        src={userContext.user.dp}
                                    />
                                </div>
                            :   
                                <div 
                                    className="border rounded-3xl flex justify-center items-center px-10 pt-1 pb-2 text-2xl hover:cursor-pointer hover:scale-110 hover:bg-custom-slate-900 hover:bg-custom-hover"
                                    onClick={() => userContext.logoutUser()}
                                >
                                    {userContext.user.name}
                                </div>
                        }
                    </>
                :
                    <div 
                        className="border rounded-3xl flex justify-center items-center px-10 pt-1 pb-2 text-2xl hover:cursor-pointer hover:scale-110 hover:bg-custom-slate-900 hover:bg-custom-hover"
                        onClick={() => userContext.updateUser(dummyUser)}
                    >
                        signup
                    </div>
            }

            {
                
            }
        </div>
    )
}

export default NavBar