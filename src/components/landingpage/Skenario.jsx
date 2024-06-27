import { container, skenario } from "../../css/style";
Image;
import Image1 from "../../images/landingpage/card5.png";
import Image2 from "../../images/landingpage/card6.png";
import Image3 from "../../images/landingpage/card7.png";
import Image4 from "../../images/landingpage/gbr4.png";
import Image5 from "../../images/landingpage/gbr5.png";
import Image6 from "../../images/landingpage/gbr6.png";

export default function Skenario() {
	return (
		<div id="skenario" className={`${container.fluid} bg-[#F0F3FF]`}>
			<div className={`${container.box1} gap-14`}>
				<h1 className="font-bold text-4xl md:text-5xl text-center">Tahapan Penukaran</h1>

				<div className={`${skenario.cardContainer}`}>
					<div className={skenario.card}>
						<img src={Image4} className="w-[150px] md:w-[200px]" alt="" />
						<span>Kumpulkan Sampah Anda</span>
					</div>

					<div className={skenario.card}>
						<img src={Image5} className="w-[150px] md:w-[200px]" alt="" />
						<span>Foto Sampah Anda</span>
					</div>

					<div className={skenario.card}>
						<img src={Image3} className="w-[150px] md:w-[200px]" alt="" />
						<span>Upload Foto Sampah</span>
					</div>

					<div className={skenario.card}>
						<img src={Image6} className="w-[150px] md:w-[200px]" alt="" />
						<span>Dapatkan Imbalan Berupa Uang </span>
					</div>
				</div>
			</div>
		</div>
	);
}
