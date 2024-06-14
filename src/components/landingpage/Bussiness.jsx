import { container, bussiness } from "../../css/style";Image
import Image1 from "../../images/landingpage/card5.png";
import Image2 from "../../images/landingpage/card6.png";
import Image3 from "../../images/landingpage/card7.png";

export default function Bussiness() {
	return (
		<div id="bussiness" className={`${container.fluid} bg-[#E2E8FF]`}>
			<div className={`${container.box1} gap-14`}>
				<h1 className="font-bold text-5xl text-center">Bussiness Line</h1>

				<div className={`${bussiness.cardContainer}`}>
					<div className={bussiness.card}>
						<img src={Image1} width={200} alt="" />
						<span>Tukar Sampah Menjadi Uang</span>
					</div>

					<div className={bussiness.card}>
						<img src={Image2} width={180} alt="" />
						<span>Rekening Saldo Setiap Pelanggan</span>
					</div>

					<div className={bussiness.card}>
						<img src={Image3} width={200} alt="" />
						<span>Tersedia Bagi Semua</span>
					</div>
				</div>
			</div>
		</div>
	);
}
