import {container,font} from '../datas/style'

export default function About() {
	return (
		<div id='about' className={`${container.fluid} bg-[#F0F3FF]`}>
			<div className={`${container.box2} gap-14 pt-8 pb-20`}>
				<h1 className={font.heading}>About us</h1>
				<p className="text-justify text-lg">
					Kami hadir untuk membantu Anda mengubah sampah menjadi sumber penghasilan melalui platform inovatif yang
					memudahkan pengelolaan limbah rumah tangga dan industri, menjadikannya bernilai ekonomi tinggi. Dengan
					teknologi canggih, proses kami efisien, efektif, dan ramah lingkungan, memastikan setiap langkah dari
					pengumpulan hingga pengolahan limbah dilakukan dengan optimal. Misi kami adalah menciptakan masa depan yang
					lebih bersih dan berkelanjutan bagi semua orang, dengan memberikan solusi yang tidak hanya mengurangi polusi
					tetapi juga memberikan manfaat ekonomi bagi pengguna. Bergabunglah dengan kami untuk mengubah limbah menjadi
					peluang dan berkontribusi pada kelestarian lingkungan.
				</p>
			</div>
		</div>
	);
}
