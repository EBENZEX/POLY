import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { carousel } from "../../css/style";
import image1 from "../../images/landingpage/card1.png";
import image2 from "../../images/landingpage/card2.png";
import image3 from "../../images/landingpage/card3.png";
import image4 from "../../images/landingpage/card4.png";

const Carousel = () => {
	return (
		<div className="w-full bg-[#E2E8FF] h-full cursor-pointer">
			<div className="flex container mx-auto items-center ">
				<Swiper
					modules={[Pagination]}
					spaceBetween={25}
					centeredSlides={false}
					pagination={{ clickable: true }}
					className="px-12 lg:px-20 xl:px-6"
					breakpoints={{
						0: {
							slidesPerView: 1,
							centeredSlides: true,
						},
						700: {
							slidesPerView: 1.3,
							centeredSlides: false,
						},
						878: {
							slidesPerView: 1.5,
							centeredSlides: false,
						},
						1080: {
							slidesPerView: 2,
							centeredSlides: false,
						},
						1251: {
							slidesPerView: 3,
							centeredSlides: false,
						},
						1600: {
							slidesPerView: 3.5,
							centeredSlides: false,
						},
					}}
				>
					<SwiperSlide>
						<div className={`${carousel.card} px-10 bg-gradient-to-r from-[#35A29F] to-[#0B666A]`}>
							<div className={`${carousel.box1}`}>
								<h1>Tidak</h1>
								<h1>menghabiskan</h1>
								<h1>banyak waktu</h1>
							</div>
							<img className="h-[12rem] lg:h-[10rem] -ml-8" src={image1} alt="" />
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={`${carousel.card} bg-gradient-to-r from-[#FFC7DB] to-[#997783]`}>
							<img className="h-[12rem] lg:h-[10rem] -ml-6" src={image2} alt="" />
							<div className={`${carousel.box1} ml-0`}>
								<h1>Tidak</h1>
								<h1>menghabiskan</h1>
								<h1>banyak waktu</h1>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={`${carousel.card} bg-gradient-to-r from-[#F7FFC7] to-[#949977]`}>
							<img className="h-[12rem] lg:h-[10rem] w-[14rem] lg:w-[10rem]" src={image3} alt="" />
							<div className={`${carousel.box1} ml-0 mr-4`}>
								<h1>Tidak</h1>
								<h1>menghabiskan</h1>
								<h1>banyak waktu</h1>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={`${carousel.card} bg-gradient-to-r from-[#E14343] to-[#7B2525]`}>
							<div className={`${carousel.box1}`}>
								<h1>Tidak</h1>
								<h1>menghabiskan</h1>
								<h1>banyak waktu</h1>
							</div>
							<img className="h-[12rem] lg:h-[10rem]" src={image4} alt="" />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Carousel;
