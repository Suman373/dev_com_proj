import HomeBG from "../../assets/HomeBG";
import NavBar from "../../constants/NavBar";
 
// import svgs
import { ConnectSVG, CollabSvg, DevelopSvg, DevComGreenFilledSvg } from "../../assets/ForHome";

const Home = () => {
	return (
		<>
			<HomeBG/>
			<NavBar/>

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
