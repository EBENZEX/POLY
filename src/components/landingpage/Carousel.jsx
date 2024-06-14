import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { carousel } from "../../css/style";
import image1 from "../../images/user/user-01.png";
import image2 from "../../images/user/user-01.png";
import image3 from "../../images/user/user-01.png";
import image4 from "../../images/user/user-01.png";

const Carousel = () => {
	return (
		<div className="w-full bg-[#E2E8FF] h-full cursor-pointer">
			<div className="container flex items-center lg:px-20">
				<Swiper
					modules={[Pagination]}
					spaceBetween={100}
					slidesPerView={`auto`}
					centeredSlides={false}
					pagination={{ clickable: true }}
					className="pb-10"
				>
					<SwiperSlide>
						<div
							className={`${carousel.card} rounded-xl flex items-center gap-2 p-4 bg-gradient-to-r from-[#35A29F] to-[#0B666A]`}
						>
							<div className="grid text-white">
								<h1>Tidak</h1>
								<h1>menghabiskan</h1>
								<h1>banyak waktu</h1>
							</div>
							<img src={image1} alt="" />
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div
							className={`${carousel.card} rounded-xl flex items-center gap-2 p-4 bg-gradient-to-r from-[#35A29F] to-[#0B666A]`}
						>
							<div className="grid text-white">
								<h1>Tidak</h1>
								<h1>menghabiskan</h1>
								<h1>banyak waktu</h1>
							</div>
							<img src={image1} alt="" />
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div
							className={`${carousel.card} rounded-xl flex items-center gap-2 p-4 bg-gradient-to-r from-[#35A29F] to-[#0B666A]`}
						>
							<div className="grid text-white">
								<h1>Tidak</h1>
								<h1>menghabiskan</h1>
								<h1>banyak waktu</h1>
							</div>
							<img src={image1} alt="" />
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div
							className={`${carousel.card} rounded-xl flex items-center gap-2 p-4 bg-gradient-to-r from-[#35A29F] to-[#0B666A]`}
						>
							<div className="grid text-white">
								<h1>Tidak</h1>
								<h1>menghabiskan</h1>
								<h1>banyak waktu</h1>
							</div>
							<img src={image1} alt="" />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Carousel;
