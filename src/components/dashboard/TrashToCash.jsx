import Image from "../../images/dashboard/trash.png";
import { SquareCheckBig } from "lucide-react";

export default function TrashToCash() {
	return (
		<div className="">
			<span className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick="Openbar()">
				<div className="sidebar buka fixed top-0 bottom-0 sm:left-[-100px] md:left-[0px] lg:left-0 left-[-100px] p-2 w-[100px] overflow-y-auto text-center bg-sdb shadow h-screen">
					<div className="text-gray-100 text-xl" />
					<div className="p-2.5 mt-1 flex items-center rounded-md ">
						<img src="img/logo.png" alt="" className="px-2 w-full" />
					</div>

					<div>
						<div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
							<img src="img/dsb.png" alt="" className="w-auto h-auto" />
						</div>
						<hr className="my-2 mx-5 text-gray-600" />
						<div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
							<img src="img/wallet.png" alt="" className="w-auto h-auto" />
						</div>
						<hr className="my-2 mx-5 text-gray-600" />
						<div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
							<img src="img/trd.png" alt="" className="w-auto h-auto" />
						</div>
						<hr className="my-2 mx-5 text-gray-600" />
						<div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
							<img src="img/trd.png" alt="" className="w-auto h-auto" />
						</div>
						<hr className="my-2 mx-5 text-gray-600" />
					</div>
				</div>
			</span>

			<div className="sidebar tutup fixed top-0 bottom-0 left-[-300px] duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-sdb shadow h-screen">
				<div className="text-gray-100 text-xl">
					<div className="mb-4 flex items-center rounded-md">
						<img src="img/logo.png" alt="" className="w-auto h-auto px-2" />
						<h1 className="text-[15px]  ml-28 text-xl text-gray-200 font-bold ">
							<img src="img/ham.png" alt="" className="w-auto h-auto" onClick="Openbar()" />
						</h1>
					</div>

					<div>
						<div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
							<img src="img/dsb.png" alt="" className="w-auto h-auto" />
							<span className="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</span>
						</div>
						<hr className="my-2 mx-5 text-gray-600" />
						<div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
							<img src="img/wallet.png" alt="" className="w-auto h-auto" />
							<span className="text-[15px] ml-4 text-gray-200 font-bold">Wallet</span>
						</div>
						<hr className="my-2 mx-5 text-gray-600" />
						<div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
							<img src="img/trd.png" alt="" className="w-auto h-auto" />
							<span className="text-[15px] ml-4 text-gray-200 font-bold">Trash To Cash</span>
						</div>
						<hr className="my-2 mx-5 text-gray-600" />
					</div>
				</div>
			</div>

			<main className="flex justify-center items-center w-full duration-1000" id="main-content">
				<div className="container mx-auto mt-8">
					<p className="text-center text-2xl font-bold mb-4">Trade To Cash</p>

					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:ml-14 lg:grid-cols-2 gap-4 p-6">
						<div className="p-6 rounded-lg bg-gradient-to-br from-[#836FFF] to-[#4F4399] card1">
							<form>
								<div className="mb-4">
									<label htmlFor="id-penukaran" className="block text-sm font-bold mb-2 text-white">
										ID Penukaran
									</label>

									<input
										type="text"
										id="id-penukaran"
										value="P086628212412"
										className="bg-gray-400 text-center text-white font-bold appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
										readOnly
									/>
								</div>

								<div className="mb-4">
									<label htmlFor="foto-sampah" className="block text-sm font-bold text-white">
										Foto Sampah & Video Sekitar
									</label>

									<input type="file" className="bg-white w-full rounded-sm" id="foto-sampah" />
								</div>

								<div className="mb-4">
									<label htmlFor="lokasi-daerah" className="block text-sm font-bold mb-2 text-white">
										Lokasi Daerah
									</label>

									<input
										type="text"
										id="lokasi-daerah"
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									/>
								</div>

								<div className="mb-4">
									<label htmlFor="berat-sampah" className="block text-sm font-bold mb-2 text-white">
										Berat Sampah
									</label>

									<input
										type="text"
										id="berat-sampah"
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									/>
								</div>

								<div className="flex items-center justify-center">
									<button
										className="bg-[#15F5BA] hover:bg-teal-700 text-dark font-bold py-2 px-7 rounded-lg focus:outline-none focus:shadow-outline"
										type="button"
									>
										S I M P A N
									</button>
								</div>
							</form>
						</div>

						<div className="bg-gradient-to-b from-[#836FFF] to-[#4F4399] rounded-lg custom-shadow custom-card card1">
							<div className="w-full h-full bg-right-top bg-cover p-6" style={{ backgroundImage: `url(${Image})` }}>
								<h2 className="text-center text-xl font-bold mb-4 text-white">KETENTUAN</h2>

								<div className="custom-card-content">
									<ul className="list-none text-left">
										<li className="mb-2 flex items-start gap-3 text-white">
											<SquareCheckBig size={28} strokeWidth={3} />
											ID Penukaran sudah ditentukan oleh sistem dan tidak dapat diubah / manipulasi
										</li>

										<li className="mb-2 flex items-start gap-3 text-white">
											<SquareCheckBig size={35} strokeWidth={3} />
											Foto Sampah Harus Beserta dengan kertas yang bertuliskan: ID Penukaran, Tanggal & Jam, Berat
											Sampah
										</li>

										<li className="mb-2 flex items-start gap-3 text-white">
											<SquareCheckBig size={40} strokeWidth={3} />
											Video Sekitar dilakukan dengan cara memutar 180Â° dengan melihatkan sekeliling tempat saat
											pembuangan sampah
										</li>

										<li className="mb-2 flex items-start gap-3 text-white">
											<SquareCheckBig size={38} strokeWidth={3} />
											Setelah Melakukan penukaran, Saldo akan Ditambahkan ke saldo setelah admin menyetujui penukaran
											anda
										</li>

										<li className="mb-2 flex items-start gap-3 text-white ">
											<SquareCheckBig strokeWidth={3} />
											Jika ditemukan kecurangan oleh admin akun anda akan dinonaktifkan
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<aside id="main-content2" className="w-full tb lg:pl-14 md:pl-14 duration-1000">
				<div className="lg:w-[90%] overflow-x-scroll  md:w-[80%] sm:w-[30%] container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
					<div className="relative shadow-md sm:rounded-lg">
						<table className="w-full text-sm text-left rtl:text-right border text-dark-500 dark:text-dark-400">
							<thead className="font-bold text-dark border-b">
								<tr className="">
									<th scope="col" className="px-12 py-3 text-center font-bold" colSpan="5">
										Riwayat Penukaran
									</th>
								</tr>
								<tr>
									<th scope="col" className="px-6 py-3 ">
										ID Penukaran
									</th>
									<th scope="col" className="px-6 py-3 ">
										Lokasi Daerah
									</th>
									<th scope="col" className="px-6 py-3 ">
										Berat Sampah
									</th>
									<th scope="col" className="px-6 py-3 ">
										Total Rupiah
									</th>
									<th scope="col" className="px-6 py-3 ">
										Foto Sampah
									</th>
									<th scope="col" className="px-6 py-3 ">
										Status
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="bg-white border-b">
									<td className="px-6 text-center text-red-500 py-20" colSpan="6">
										Belum Ada penukaran nih...
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</aside>
			<div className="text-white m-[20px]">.</div>
		</div>
	);
}
