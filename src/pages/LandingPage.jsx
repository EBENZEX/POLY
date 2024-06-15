import Nav from "../components/landingpage/Nav";
import Login from "./Login";
import Home from "../components/landingpage/Home";
import Register from "./Register";
import Footer from "../components/landingpage/Footer";
import PageTitle from "../components/PageTitle";

export default function LandingPage() {
	return (
		<div>
			<Nav />
			{location.pathname === "/" && (
				<>
					<PageTitle title={"POLY | Landing Page"} />
					<Home />
				</>
			)}
			{location.pathname === "/login" && (
				<>
					<PageTitle title={"POLY | Login"} />
					<Login />
				</>
			)}
			{location.pathname === "/register" && (
				<>
					<PageTitle title={"POLY | Register"} />
					<Register />
				</>
			)}
			<Footer />
		</div>
	);
}
