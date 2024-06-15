import Img from "../../images/dashboard/user-06.png";
import ChangeProfile from "./ChangeProfile";

export default function CardProfile() {
	return (
		<div className="flex flex-1 md:col-span-5 lg:col-span-3 h-full bg-white md:justify-center lg:justify-start shadow-xl rounded-xl lg:rounded-none md:rounded-br-xl md:flex-col md:items-center gap-10 px-5 md:px-0 md:gap-5 py-6">
			<div className="flex flex-col md:flex-row items-center gap-2">
				<img className="size-[6rem] lg:size-[10rem] lg:-mt-[7.5rem]" src={Img} alt="" />

				<button className="lg:hidden rounded-full bg-gradient-to-r from-[#836FFF] to-[#4F4399] text-white font-medium h-min text-sm px-2 md:px-5 py-2">
					Change Profile
				</button>
			</div>

			<div className="text-left flex flex-col gap-4">
				<h1 className="font-bold text-3xl lg:text-2xl">Steve Arviano</h1>

				<div className="flex flex-col gap-2">
					<p>Laki - Laki</p>
					<p>Stevear@gmail.com</p>
					<p>09123456789</p>
				</div>
			</div>

			<button className="hidden lg:block rounded-full bg-gradient-to-r from-[#836FFF] to-[#4F4399] text-white font-bold px-6 py-2">
				Change Profile
			</button>
		</div>
	);
}
