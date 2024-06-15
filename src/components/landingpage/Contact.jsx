import { container, font } from "../../css/style";
import image from "../../images/landingpage/contact.png";

export default function Contact() {
	return (
		<div id="contact" className={`${container.fluid} bg-[#F0F3FF]`}>
			<div className={`${container.box2}`}>
				<h1 className={font.heading}>Contact Us</h1>

				<div className="flex justify-center items-center translate-x-4 md:translate-x-[6rem]">
					<div className="flex flex-col gap-2 justify-center w-full md:w-3/6 h-full md:h-4/6 bg-gradient-to-r from-[#836FFF] to-[#4F4399] rounded-[1.3rem] text-white font-bold text-lg pl-6 pr-20 sm:pr-6 py-10">
						<span>JL. M.H Thamrin No.140</span>
						<span>Phone : (061) 4573767</span>
						<span>Email : mikroskil@gmail.com</span>
					</div>

					<img src={image} className="h-[14rem] w-[16rem] lg:h-[20rem] lg:w-[28rem] -translate-x-[5rem] lg:-translate-x-[12rem]" alt="" />
				</div>
			</div>
		</div>
	);
}
