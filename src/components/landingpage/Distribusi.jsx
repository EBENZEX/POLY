import { container, font } from "../../css/style";

export default function Distribusi() {
	return (
		<div id="distribusi" className={`${container.fluid} bg-[#E2E8FF]`}>
			<div className={`${container.box2} gap-14 pt-8 pb-20`}>
				<h1 className={font.heading}>Distribution & Cost</h1>
				<p className="text-justify text-lg">
					Pihak POLY Berkerja sama dengan pemerintah sebagai distribusi dalam penukaran sampah dan pengambilan sampah ,
					Anda wajib mebuang sampah pada Tempat Penampungan Sementara (TPS) di daerah anda TPS merupakan tempat sebelum
					sampah diangkut ke tempat pendauran ulang, pengolahan, dan/atau tempat pengolahan sampah terpadu,Dari TPS,
					sampah akan diangkut dan dibawa oleh Dinas Lingkungan menggunakan truk sampah ke Tempat Pemrosesan Akhir
					(TPA). TPA adalah tempat untuk memproses dan mengembalikan sampah ke media lingkungan secara aman bagi manusia
					dan lingkungan.
				</p>
				<p className="text-2xl font-semibold text-center italic">
					"Setiap penukaran sampah, anda akan memperoleh uang sebesar Rp.5000 setiap penukarannya ( Bukan dari Acuan
					kilogram )"
				</p>
			</div>
		</div>
	);
}
