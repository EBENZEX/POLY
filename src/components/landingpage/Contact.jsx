import { container, font } from "../../css/style";
import image from "../../images/landingpage/contact.png";

export default function Contact() {
	return (
		<div id="contact" className={`${container.fluid} bg-[#F0F3FF]`}>
			<div className={`${container.box2}`}>
				<h1 className={font.heading}>Hubungi Kami</h1>

				<div className="flex justify-center items-center translate-x-5 px-6 md:translate-x-[6rem]">
					<div className="flex flex-col gap-2 text-sm md:text-lg justify-center w-5/6 md:w-3/6 h-4/6 md:h-4/6 bg-gradient-to-r from-[#836FFF] to-[#4F4399] rounded-[1.3rem] text-white font-semibold md:font-bold pl-6 pr-20 sm:pr-6 py-12">
						<span>JL. M.H Thamrin No.140</span>
						<span>No Handphone : (061) 4573767</span>
						<span>Email : mikroskil@gmail.com</span>
					</div>

					<img
						src={image}
						className="h-[8rem] w-[12rem] lg:h-[20rem] lg:w-[28rem] -translate-x-[3.2rem] lg:-translate-x-[12rem]"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
