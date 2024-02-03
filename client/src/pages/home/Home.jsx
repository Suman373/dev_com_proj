import { useState } from "react";

// context
import { useContext } from "react";
import { UserContext } from "../../contexts/UserState";

// svgs
import { ConnectSVG, CollabSvg, DevelopSvg, DevComGreenFilledSvg } from "../../assets/ForHome";

// components
import HomeBG from "../../assets/HomeBG";
import NavBar from "../../constants/NavBar";

const Home = () => {

	const userContext = useContext(UserContext)
	const [screenHeight, setScreenHeight] = useState(window.innerHeight)

	return (
		<>
			<HomeBG/>
			<NavBar/>

			{
				(userContext.loggedIn) && 
					<>
						{/* left nav panel */}
						<div className="absolute top-20 left-0 h-[calc(100vh-5rem)] w-56 px-auto flex flex-col justify-center items-center font-devcom">
							<div className="-mt-10 flex flex-col justify-evenly gap-4">
								<div
									className='py-2 px-4 flex justify-start items-center text-2xl rounded-2xl text-white hover:bg-custom-hover hover:cursor-pointer'
									onClick={() => handleNavigation('hackathons')}
								>
									hackathons
								</div>
								<div
									className='py-2 px-4 flex justify-start items-center text-2xl rounded-2xl text-white hover:bg-custom-hover hover:cursor-pointer'
									onClick={() => handleNavigation('blogs')}
								>
									blogs
								</div>
								<div
									className='py-2 px-4 flex justify-start items-center text-2xl rounded-2xl text-white hover:bg-custom-hover hover:cursor-pointer'
									onClick={() => handleNavigation('chat')}
								>
									chat
								</div>
							</div>
						</div>
						
						{/* right '/' press prompt */}
						<div className="fixed top-20 right-0 h-[calc(100vh-5rem)] w-fit flex items-center overflow-hidden">
							<p className="relative -translate-y-5 translate-x-32 -rotate-90 w-fit font-devcom text-2xl text-zinc-700 whitespace-nowrap ">
								press "/" anytime to start collab
							</p>
						</div>
						{/* <div className="absolute top-20 right-0 -mr-20 flex h-[calc(100vh-5rem)] w-60 items-center justify-center border">
							<div className=" bg-red-500 border-2 border-sky-900 flex items-center justify-center">
								<p className="-rotate-90 w-fit font-devcom text-xl text-zinc-700 whitespace-nowrap ">
									press "/" anytime to start collab
								</p>
							</div>
						</div> */}
						
						
					</>
			}

			<div className="home-container absolute top-20 h-[calc(100vh-5rem)] w-full flex flex-col justify-center items-center gap-5">
				<div className="home-container-svgs flex flex-col justify-between items-start gap-2">
					<ConnectSVG/>
					<CollabSvg/>
					<DevelopSvg/>
					<DevComGreenFilledSvg/>
				</div>
				<p className="text-white text-3xl font-devcom">
					for all your hackathons and projects
				</p>
			</div>
		</>
	);
};

export default Home;
