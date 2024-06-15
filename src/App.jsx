import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "react-spinners/BeatLoader";
import DashboardHome from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

const App = () => {
	const [isLoading, setIsLoading] = useState(true); // Set initial loading state
	const location = useLocation();

	useEffect(() => {
		setIsLoading(true);
		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timeoutId);
	}, [location.pathname]);

	return isLoading ? (
		<div className="loading-container w-screen h-screen flex justify-center items-center">
			<Loader type="ThreeDots" color="#836FFF" height={80} width={80} />
		</div>
	) : location.pathname.includes("dashboard") ? (
		<DashboardHome />
	) : (
		<LandingPage />
	);
};

export default App;
