import { container,bussiness } from "../datas/style";

import Logo from "../assets/reactlogo.png";

export default function Bussiness() {
	return (
		<div id="bussiness" className={`${container.fluid} bg-[#E2E8FF]`}>
			<div className={`${container.box1} gap-14`}>
				<h1 className="font-bold text-5xl text-center">Bussiness Line</h1>

				<div className={`${bussiness.cardContainer}`}>
					<div className={bussiness.card}>
						<img src={Logo} width={150} alt="" />
						<span>Tukar Sampah Menjadi Uang</span>
					</div>

					<div className={bussiness.card}>
						<img src={Logo} width={150} alt="" />
						<span>Rekening Saldo Setiap Pelanggan</span>
					</div>

					<div className={bussiness.card}>
						<img src={Logo} width={150} alt="" />
						<span>Tersedia Bagi Semua</span>
					</div>
				</div>
			</div>
		</div>
	);
}
