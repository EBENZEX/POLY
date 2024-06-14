import Img from "../../images/user/user-06.png";

export default function dashboardProfile() {
	return (
		<div className="flex shadow-xl rounded-xl md:rounded-none md:shadow-none flex-col items-center gap-5 mb-32">
			<img className="size-[10rem] -mt-24" src={Img} alt="" />

			<h1 className="font-bold text-2xl">Steve Arviano</h1>

			<div className="flex flex-col gap-2 -ml-4">
				<p>Laki - Laki</p>
				<p>Stevear@gmail.com</p>
				<p>09123456789</p>
			</div>

			<button className="rounded-full bg-gradient-to-r from-[#836FFF] to-[#4F4399] text-white font-bold px-6 py-2">
				Change Profile
			</button>
		</div>
	);
}
