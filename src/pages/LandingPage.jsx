import Nav from "../components/landingpage/Nav";
import Login from "./Login";
import Home from "../components/landingpage/Home";
import Register from "./Register";
import Footer from "../components/landingpage/Footer";

export default function LandingPage() {
	return (
		<div>
			<Nav />
			{location.pathname === "/" && <Home />}
			{location.pathname === "/login" && <Login />}
			{location.pathname === "/register" && <Register />}
			<Footer />
		</div>
	);
}
