import { container } from "../../css/style";
import { Link } from "react-router-dom";
import Image from "../../images/landingpage/hero2.png";

export default function Hero() {
	return (
		<div
			style={{ backgroundImage: `url(${Image})` }}
			className={`${container.fluid} bg-cover bg-no-repeat bg-right-top md:bg-left h-[650px] mt-1`}
		>
			<div className={`${container.box1} mt-10 md:mt-20 `}>
				<div className="font-semibold text-4xl md:text-5xl text-slate-800 grid gap-2">
					<h1>
						Memberdayakan Perjalanan Tanpa <span className="text-[#6B8E23]">Sampah</span>
					</h1>

					<h1>
						Secara <span className="text-[#6B8E23]">Online!</span>
					</h1>
				</div>

				<div className="grid gap-1 font-medium text-slate-600 text-xl">
					<p>Unlimited Free Usage</p>
				</div>

				<Link className="bg-initial w-1/2 lg:w-1/6 px-10 md:px-2 py-2 text-xl text-center font-bold hover:bg-[#836FFF] hover:text-white border-2 rounded-[1.3rem] border-[#836FFF]">
					Get Started
				</Link>
			</div>
		</div>
	);
}
