import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import Hackathons from "./pages/hackathon/Hackathons";

import UserState from "./contexts/UserState";

function App() {

	return (
		<UserState>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/hackathons" element={<Hackathons/>}/>
				</Routes>
			</Router>
		</UserState>
	);
}

export default App;
