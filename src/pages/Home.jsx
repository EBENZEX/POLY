import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Bussiness from "../components/Bussiness";
import Contact from "../components/Contact";
import Carousel from "../components/Carousel";

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
