import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

// context
import { UserContext } from '../contexts/UserState'

// dummy data
import { DummyUser } from '../data/DummyUser'

// svgs
import { NavDevCom, NavHam } from "../assets/ForNavBar"

const NavBar = () => {

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

    const handleHamToggle = () => {

    }

    return (
        <div className="w-full h-20 flex justify-between px-12 items-center bg-transparent text-white font-devcom">
            {
                (userContext.loggedIn) ?
                    <div 
                        className="nav-ham w-10 h-4 border-t-2 border-b-2 hover:cursor-pointer"
                        onClick={() => handleHamToggle()}
                    >
                    </div>
                : 
                    <NavDevCom/>
            }
            {
                (userContext.loggedIn) ? 
                    <div className="absolute top-0 left-0 h-20 w-full flex justify-center items-center">
                        <NavDevCom/>
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
                                    className="relative w-10 h-10 rounded-full overflow-hidden hover:cursor-pointer"
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
            
        </div>
    )
}

export default NavBar