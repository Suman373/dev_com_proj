import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useContext, useEffect } from "react";

// pages
import PreHome from "./pages/pre-animation/PreHome";
import Home from "./pages/home/Home";
import Hackathons from "./pages/hackathon/Hackathons";
import Profile from "./pages/profile/Profile";
import Articles from "./pages/article/Articles";
import Chat from "./pages/chat/Chat";
import Connect from "./pages/connect/Connect";
import Login from "./pages/login/Login";

// context
import UserState from "./contexts/UserState";
import SignUp from "./pages/signup/SignUp";
import ProfileRegistration from "./pages/signup/ProfileRegistration";

function App() {

	return (
		<UserState>			
			<Router>
				<Routes>
					<Route path="/" element={<PreHome />}/>
					<Route path='/home' element={<Home/>}/>
					<Route path="/hackathons" element={<Hackathons/>}/>
					<Route path="/profile" element={<Profile/>}/>
					<Route path="/articles" element={<Articles/>}/>
					<Route path="/chat" element={<Chat/>}/>
					<Route path="/connect" element={<Connect/>}/>
					<Route path="/signup" element={<SignUp/>}/>
					<Route path="/login" element={<Login/>}/>
					<Route path="/details" element={<ProfileRegistration/>}/>
				</Routes>
			</Router>
		</UserState>
	);
}

export default App;
