import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {carousel} from '../datas/style'
import image1 from "../assets/reactlogo.png";
import image2 from "../assets/reactlogo.png";
import image3 from "../assets/reactlogo.png";
import image4 from "../assets/reactlogo.png";

const Carousel = () => {
	return (
		<div className="w-full bg-[#E2E8FF] cursor-pointer">
			<Swiper
				modules={[Pagination]}
				spaceBetween={200}
				slidesPerView={2}
				centeredSlides={false}
				pagination={{ clickable: true }}
				className="pb-10"
			>
				<SwiperSlide>
					<div className={carousel.card}>
						<img src={image1} alt="" />
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={carousel.card}>
						<img src={image2} alt="" />
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={carousel.card}>
						<img src={image3} alt="" />
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={carousel.card}>
						<img src={image4} alt="" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Carousel;
