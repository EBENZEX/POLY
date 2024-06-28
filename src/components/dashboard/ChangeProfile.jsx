import { useEffect, useState } from "react";

export default function ChangeProfile() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const storedData = localStorage.getItem("profile");
		if (storedData) {
			const parsedData = JSON.parse(storedData);
			setData(parsedData);
		}
	}, []);
	return (
		<div className="w-screen z-50 absolute top-0 left-0 h-screen backdrop-blur-lg flex justify-center flex-1">
			<div className="h-full bg-[#836FFF] md:h-[80%] w-full md:w-1/3 lg:w-1/2 flex flex-col justify-center items-center">
				<img src="" alt="" />

				<h1>Profile</h1>

				<label htmlFor="" className="text-white text-lg">
					<span>Username</span>
					<input className="bg-white rounded-xl outline-purple-900" type="text" />
				</label>
			</div>
		</div>
	);
}
