import { useEffect, useState } from "react";
import Img from "../../images/dashboard/user-06.png";
import ChangeProfileAlert from "../popout/ChangeProfileAlert";

export default function CardProfile({ onClick }) {
	const [click, setClick] = useState(false);
	const [data, setData] = useState({
		id: "P01",
		nama: "Steve Arviano",
		email: "Stevear@gmail.com",
		hp: "09123456789",
	});
	useEffect(() => {
		const storedData = localStorage.getItem("profile");
		if (storedData) {
			const parsedData = JSON.parse(storedData);
			setData(parsedData);
		}
	}, []);

	return (
		<div className="flex flex-1 md:col-span-5 lg:col-span-3 h-full bg-white md:justify-center lg:justify-start shadow-xl rounded-xl lg:rounded-none md:rounded-br-xl md:flex-col md:items-center gap-4 px-5 md:px-0 md:gap-5 py-6">
			<div className="flex flex-col md:flex-row items-center gap-2">
				<img className="size-[6rem] lg:size-[10rem] lg:-mt-[7.5rem]" src={Img} alt="" />

				<button
					// onClick={onClick}
					onClick={() => setClick((prev) => !prev)}
					className="lg:hidden rounded-full bg-gradient-to-r from-[#836FFF] to-[#4F4399] text-white font-medium h-min text-[.6rem] px-2 md:px-5 py-2"
				>
					Ubah Profile
				</button>
			</div>

			<div className="text-left flex flex-col w-[70%] gap-4">
				<h1 className="font-bold text-2xl md:text-3xl lg:text-2xl">{data.nama}</h1>

				<div className="flex flex-col gap-2 text-xs md:text-md">
					<p>{data.id}</p>
					<p>{data.email}</p>
					<p>{data.hp}</p>
				</div>
			</div>

			<button
				onClick={() => setClick((prev) => !prev)}
				className="hidden lg:block rounded-full bg-gradient-to-r from-[#836FFF] to-[#4F4399] text-white font-bold px-6 py-2"
			>
				Ubah Profil
			</button>
			{click && <ChangeProfileAlert state={click} setState={setClick} />}
		</div>
	);
}
