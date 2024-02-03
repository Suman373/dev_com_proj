import { useNavigate } from 'react-router-dom'

import { NavDevCom } from "../assets/ForNavBar"

const NavBar = () => {

    const navigate = useNavigate()
    const handleNavigation = (path) => {
        navigate(`/${path}`)
    }

    return (
        <div className="w-full h-20 flex justify-between px-10 items-center bg-transparent text-white font-devcom">
            <NavDevCom/>
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
            <div className="border rounded-3xl flex justify-center items-center px-10 pt-1 pb-2 text-2xl hover:cursor-pointer hover:scale-110 hover:bg-custom-slate-900 hover:bg-custom-hover">
                signup
            </div>
        </div>
    )
}

export default NavBar