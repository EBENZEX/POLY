import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "react-spinners/BeatLoader";
import Nav from "./components/landingpage/Nav";
import Footer from "./components/landingpage/Footer";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";

const App = () => {
	const [isLoading, setIsLoading] = useState(true); // Set initial loading state
	const location = useLocation();

	useEffect(() => {
		setIsLoading(true);
		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, 1000); // Simulate loading for 1 second

		return () => clearTimeout(timeoutId); // Clear timeout on cleanup
	}, [location.pathname]);

	return (
		<div className="App">
			{isLoading ? (
				<div className="loading-container w-screen h-screen flex justify-center items-center">
					<Loader type="ThreeDots" color="#836FFF" height={80} width={80} />
				</div>
			) : (
				<>
					{location.pathname === "/profile" ? (
						<Profile />
					) : (
						<>
							<Nav />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/login" element={<Login />} />
								<Route path="/register" element={<Register />} />
							</Routes>
							<Footer />
						</>
					)}
				</>
			)}
		</div>
	);
};

export default App;
