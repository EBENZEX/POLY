import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "./Hero";
import Skenario from './Skenario'
import Distribusi from './Distribusi'
import About from "./About";
import Bussiness from "./Bussiness";
import Contact from "./Contact";
import Carousel from "./Carousel";

export default function Home() {
	const location = useLocation();

	useEffect(() => {
		let temp;
		switch (location.hash) {
			case "#about":
				temp = document.getElementById("about");
				break;
			case "#bussiness":
				temp = document.getElementById("bussiness");
				break;
			case "#contact":
				temp = document.getElementById("contact");
				break;
			case "#distribusi":
				temp = document.getElementById("distribusi");
				break;
			case "#skenario":
				temp = document.getElementById("skenario");
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
			<Skenario/>
			<Distribusi/>
			<About />
			<Bussiness />
			<Contact />
		</section>
	);
}
