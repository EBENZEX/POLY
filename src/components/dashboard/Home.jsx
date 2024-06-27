import { useState, useEffect } from "react";
import Image1 from "../../images/dashboard/icon1.png";
import Image2 from "../../images/dashboard/icon2.png";
import Image3 from "../../images/dashboard/icon3.png";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const storedData = localStorage.getItem("data");
		if (storedData) {
			setData(JSON.parse(storedData));
		}
	}, []);

	return (
		<div className="">
			<main className="flex justify-center items-center w-full duration-1000" id="main-content">
				<div className="container mx-auto mt-8">
					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:ml-14 lg:grid-cols-3 gap-4 p-6">
						<div className="bg-white p-6 rounded-lg shadow-2xl">
							<div className="grid grid-cols-2 gap-10">
								<div>
									<p>
										<img src={Image1} className="size-[7rem]" alt="" />
									</p>

									<p className="text-dark-700 font-bold mt-6">Total Partisipasi</p>
								</div>
								<div>
									<p className="text-dark-700 font-bold mt-12 text-3xl">1</p>
								</div>
							</div>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-2xl">
							<div className="grid grid-cols-2 gap-10">
								<div>
									<p>
										<img src={Image2} className="size-[7rem]" alt="" />
									</p>

									<p className="text-dark-700 font-bold mt-6">Total Penukaran</p>
								</div>

								<div>
									<p className="text-dark-700 font-bold mt-12 text-3xl">{data[6] ? data[6] : 0}</p>
								</div>
							</div>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-2xl">
							<div className="grid grid-cols-2 gap-10">
								<div>
									<p>
										<img src={Image3} className="size-[7rem]" alt="" />
									</p>

									<p className="text-dark-700 font-bold mt-6">Total Sampah</p>
								</div>

								<div>
									<p className="text-dark-700 font-bold mt-12 text-3xl">{data[7] ? data[7] : 0}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<aside
				id="main-content2"
				className="w-full overflow-x-scroll md:overflow-x-hidden tb lg:pl-14 md:pl-14 py-2 duration-1000"
			>
				<div className="w-[90%] lg:w-full container mx-auto mt-8 lg:px-8  py-8">
					<div className="relative shadow-md sm:rounded-lg">
						<table className="w-full text-lg text-left rtl:text-right text-dark-500 shadow-2xl dark:text-dark-400 ">
							<thead className="font-bold bg-white text-dark border-b">
								<tr>
									<th scope="col" className="px-12 py-3 border-b text-center font-bold" colSpan="5">
										Penukaran Sampah
									</th>
								</tr>

								<tr>
									<th scope="col" className="px-6 py-3">
										ID Pengguna
									</th>

									<th scope="col" className="px-6 py-3">
										Nama Pengguna
									</th>

									<th scope="col" className="px-6 py-3">
										Lokasi Daerah
									</th>

									<th scope="col" className="px-6 py-3">
										Total Sampah
									</th>

									<th scope="col" className="px-6 py-3">
										Total Rupiah
									</th>
								</tr>
							</thead>

							<tbody>
								{data.length !== 0 ? (
									data.map((e, i) => (
										<tr className="bg-white border-b" key={i}>
											<td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark">
												#{e[0]}
											</td>
											<td className="px-6 py-4">{e[4]}</td>
											<td className="px-12 py-4">{e[2]}</td>
											<td className="px-14 py-4">{e[3]}</td>
											<td className="px-14 py-4">{e[5]}</td>
										</tr>
									))
								) : (
									<tr className={`bg-white border-b`}>
										<td className="px-6 text-center text-red-500 py-20" colSpan="6">
											No Data Recorded...
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</aside>
			<div className="text-white m-[20px]">.</div>
		</div>
	);
}
