import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "../components/landingpage/Hero";
import About from "../components/landingpage/About";
import Bussiness from "../components/landingpage/Bussiness";
import Contact from "../components/landingpage/Contact";
import Carousel from "../components/landingpage/Carousel";

export default function Home() {
	const location = useLocation();

	useEffect(() => {
		let temp;
		switch (location.hash) {
			case '#about':
				temp = document.getElementById('about')
				break;
			case '#bussiness':
				temp = document.getElementById('bussiness')
				break;
			case '#contact':
				temp = document.getElementById('contact')
				break;
			default:
				break;
		}
		if (temp) {
			temp.scrollIntoView({ behavior: "smooth" });
		}
	}, [location]);
	return (
		<section>
			<Hero />
			<Carousel />
			<About />
			<Bussiness />
			<Contact />
		</section>
	);
}
