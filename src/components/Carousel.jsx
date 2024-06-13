import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { carousel } from "../css/style";
import image1 from "../assets/reactlogo.png";
import image2 from "../assets/reactlogo.png";
import image3 from "../assets/reactlogo.png";
import image4 from "../assets/reactlogo.png";

const Carousel = () => {
	return (
		<div className="w-full bg-[#E2E8FF] h-full cursor-pointer">
			<div className="container flex items-center lg:px-20">
				<Swiper
					modules={[Pagination]}
					spaceBetween={100}
					slidesPerView={3}
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
		</div>
	);
};

export default Carousel;
