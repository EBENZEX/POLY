import { container, font } from "../../css/style";
import image from "../../images/user/user-01.png";

export default function Contact() {
	return (
		<div id="contact" className={`${container.fluid} bg-[#F0F3FF]`}>
			<div className={`${container.box2}`}>
				<h1 className={font.heading}>Contact Us</h1>

				<div className="flex justify-center items-center">
					<div className="grid gap-3 w-1/2 h-4/6 bg-gradient-to-r from-[#836FFF] to-[#4F4399] rounded-[1.3rem] text-white font-bold text-lg px-6 py-4">
						<span>JL. M.H Thamrin No.140</span>
						<span>Phone : (061) 4573767</span>
						<span>Email : mikroskil@gmail.com</span>
					</div>

					<img src={image} className="size-[25rem] -ml-40" alt="" />
				</div>
			</div>
		</div>
	);
}
