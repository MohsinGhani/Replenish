import React from "react";
import { Button, Carousel, Dropdown, Image, Menu, Space, Grid } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const menu = (
	<Menu
		items={[
			{
				label: "1st menu item",
				key: "1",
				icon: <UserOutlined />,
			},
			{
				label: "2nd menu item",
				key: "2",
				icon: <UserOutlined />,
			},
			{
				label: "3rd menu item",
				key: "3",
				icon: <UserOutlined />,
			},
		]}
	/>
);

const bannerImgs = [
	{
		title: "banner1",
		img: "/images/banner1.png",
	},
	{
		title: "banner2",
		img: "/images/banner2.png",
	},
	{
		title: "banner3",
		img: "/images/banner3.png",
	},
	{
		title: "banner4",
		img: "/images/banner4.png",
	},
	{
		title: "banner5",
		img: "/images/banner5.png",
	},
	{
		title: "banner6",
		img: "/images/banner6.png",
	},
];

const { useBreakpoint } = Grid;

const LandingBanner = () => {
	const screens = useBreakpoint();

	return (
		<div className="landing-banner-container">
			<div className="layout-wrapper">
				<div className="banner-inner-content">
					<h1 className="main-heading">Welcome To</h1>
					<Image
						src="/icons/trans-logo.png"
						alt=""
						preview={false}
						className="trans-logo"
					/>
					<br />
					<Dropdown overlay={menu}>
						<Button type="default" className="book-btn">
							<Space>
								Book Now
								<DownOutlined />
							</Space>
						</Button>
					</Dropdown>
				</div>
			</div>
			<Carousel autoplay className="banners">
				{bannerImgs?.map((banner, index) => (
					<Image
						src={banner?.img}
						alt={banner?.title}
						height={screens?.lg ? 900 : 550}
						preview={false}
						key={index}
					/>
				))}
				{/* <div>
					<Image
						src="/images/banner1.png"
						alt=""
						height={900}
						preview={false}
					/>
				</div>
				<div>
					<Image
						src="/images/banner2.png"
						alt=""
						height={900}
						preview={false}
					/>
				</div>
				<div>
					<Image
						src="/images/banner3.png"
						alt=""
						height={900}
						preview={false}
					/>
				</div>
				<div>
					<Image
						src="/images/banner4.png"
						alt=""
						height={900}
						preview={false}
					/>
				</div>
				<div>
					<Image
						src="/images/banner6.png"
						alt=""
						height={900}
						preview={false}
					/>
				</div>
				<div>
					<Image
						src="/images/banner5.png"
						alt=""
						height={900}
						preview={false}
					/>
				</div> */}
			</Carousel>
		</div>
	);
};

export default LandingBanner;
