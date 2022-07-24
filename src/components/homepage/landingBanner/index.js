import React from "react";
import { Carousel, Image, Grid } from "antd";
import BookNowDropown from "src/common/bookNowDropdown/index.js";
import { BannerImgs } from "./bannerData";
import { BannerLogo } from "./bannerLogo";

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
			return 650;
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
					{/* <Image
						src="/icons/trans-logo.png"
						alt=""
						preview={false}
						className="trans-logo"
					/> */}
					{BannerLogo}
					<br />
					<BookNowDropown />
				</div>
			</div>
			<Carousel className="banners">
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
			</Carousel>
		</div>
	);
};

export default LandingBanner;
