import React from "react";
import { Image, Grid } from "antd";
import BookNowDropown from "src/common/bookNowDropdown/index.js";
import { BannerLogo } from "src/components/SVGImageIcon/bannerLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay, Lazy } from "swiper";
import { BannerImgs } from "./bannerData";

const { useBreakpoint } = Grid;

const LandingBanner = () => {
	const screens = useBreakpoint();

	const reponsiveHanlder = () => {
		if (screens?.xl || screens?.xxl) {
			return 900;
		}
		if (screens?.lg) {
			return 700;
		}
		if (screens?.md) {
			return 600;
		}
		if (screens?.sm) {
			return 450;
		}
		return 350;
	};

	return (
		<div className="landing-banner-container">
			<div className="layout-wrapper">
				<div className="banner-inner-content">
					<h1 className="main-heading">Welcome To</h1>
					{BannerLogo}
					<p className="slogn-text">Power by ReplenishMD </p>
					<br />
					<BookNowDropown />
				</div>
			</div>
			<Swiper
				modules={[EffectFade, Navigation, Pagination, Autoplay, Lazy]}
				speed={5000}
				effect="fade"
				// navigation
				// pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log("slide change")}
				autoplay
				lazy
				className="banners"
			>
				{BannerImgs?.map((banner, index) => (
					<SwiperSlide key={index}>
						<Image
							src={banner?.img}
							alt={banner?.title}
							height={reponsiveHanlder()}
							width="100%"
							preview={false}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			{/* <Swiper
				spaceBetween={30}
				slidesPerView={1}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				effect="fade"
				// fadeEffect
				// Autoplay
				// Navigation
				// pagination={{
				// 	el: ".swiper-pagination",
				// }}
				// modules={[EffectFade]}
				// effect="fade"
				speed={2500}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				// loop
				autoplay={{
					delay: 500,
				}}
			>
				{BannerImgs?.map((banner, index) => (
					<SwiperSlide key={index}>
						<Image
							src={banner?.img}
							alt={banner?.title}
							height={reponsiveHanlder()}
							width="100%"
							preview={false}
						/>
					</SwiperSlide>
				))}
			</Swiper> */}
			{/* <Swiper spaceBetween={30} modules={[EffectFade]} effect="fade">
				{BannerImgs?.map((banner, index) => (
					<SwiperSlide key={index}>
						<Image
							src={banner?.img}
							alt={banner?.title}
							height={reponsiveHanlder()}
							width="100%"
							preview={false}
						/>
					</SwiperSlide>
				))}
			</Swiper> */}
			{/* <Carousel className="banners" autoplay effect="fade">
				{BannerImgs?.map((banner, index) => (
					<Image
						src={banner?.img}
						alt={banner?.title}
						height={reponsiveHanlder()}
						width="100%"
						preview={false}
						key={index}
					/>
				))}
			</Carousel> */}
		</div>
	);
};

export default LandingBanner;
