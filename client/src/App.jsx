import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useContext, useEffect } from "react";

// components
import Home from "./pages/home/Home";
import Hackathons from "./pages/hackathon/Hackathons";
import Profile from "./pages/profile/Profile";

// context
import UserState, { UserContext } from "./contexts/UserState";
import Articles from "./pages/article/Articles";

function App() {

	return (
		<UserState>			
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/hackathons" element={<Hackathons/>}/>
					<Route path="/profile" element={<Profile/>}/>
					<Route path="/articles" element={<Articles/>}/>
				</Routes>
			</Router>
		</UserState>
	);
}

export default App;
