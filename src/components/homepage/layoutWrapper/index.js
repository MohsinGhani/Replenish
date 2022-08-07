import {
	Layout,
	Image,
	Button,
	Row,
	List,
	Col,
	Space,
	Divider,
	Menu,
	Grid,
	Drawer,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PropTypes from "prop-types";
import { AlignLeftOutlined } from "@ant-design/icons";
import { CallIcon } from "src/components/SVGImageIcon/callIcon";
import { PhoneTextIcon } from "src/components/SVGImageIcon/phoneTextIcon";
import { LinkdinIcon } from "src/components/SVGImageIcon/linkdinIcon";
import { MessengerIcon } from "src/components/SVGImageIcon/messengerIcon";
import { TwitterIcon } from "src/components/SVGImageIcon/twitterIcon";
import { TwooIcon } from "src/components/SVGImageIcon/twooIcon";
import { FooterIcon } from "src/components/SVGImageIcon/footerIcon";
import { TextLogo } from "src/components/SVGImageIcon/textLogo";
import { IconLogo } from "src/components/SVGImageIcon/iconLogo";
import { SubMenu } from "./subMenu";

const { useBreakpoint } = Grid;
const { Header, Content, Footer } = Layout;

const propTypes = {
	children: PropTypes.node.isRequired,
};

const LayoutWrapper = ({ children }) => {
	const router = useRouter();
	const currentRoute = router.pathname;

	const footer = [
		{
			title: "Heathcare",
			list: [
				"Heathcare",
				"For Individuals",
				"Locations",
				"Doctors",
				"Health Coaches",
				"Store",
				"Log in",
				"Join now",
			],
		},
		{
			title: "Articles",
			list: [
				"Articles",
				"Health Concerns",
				"Recipes & Nutrition",
				"Optimizations",
				"News",
				"Guides",
			],
		},
		{
			title: "Company",
			list: ["Company", "Mission", "Origin", "Careers", "Team", "Press"],
		},
		{
			title: "Help & Support",
			list: [
				"Help & Support",
				"Contact",
				"Common Questions",
				"Membership",
				"Message Us",
				"Talk to us",
			],
		},
	];

	const screens = useBreakpoint();

	const [isMobile, setIsMobile] = React.useState(false);

	return (
		<Layout className="layout">
			<Header className="top-header">
				<div className="header-wrapper">
					{screens.lg ? (
						<div className="header-inline-item">
							<div className="hou-call">
								HOU : &nbsp;
								<a href="tel:832-770-7975">
									{CallIcon}
									&nbsp; (832) 770-7975
								</a>
							</div>
							<div className="training-call ml-lg-3">
								Training :&nbsp;
								<a href="tel:832-953-0313">
									{PhoneTextIcon}
									&nbsp; (832) 953-0313
								</a>
							</div>
						</div>
					) : (
						<AlignLeftOutlined
							className="side-nav-icon"
							onClick={() => setIsMobile(true)}
						/>
					)}
					{screens.lg ? (
						<Space
							align="center"
							wrap
							style={{ marginTop: "0.5rem" }}
						>
							{LinkdinIcon}
							{MessengerIcon}
							{TwitterIcon}
							{TwooIcon}
						</Space>
					) : (
						""
					)}
				</div>
				{!screens.lg && (
					<div className="logo">
						{IconLogo}
						&nbsp; &nbsp;
						{TextLogo}
					</div>
				)}
			</Header>
			{screens.lg && (
				<Header className="bottom-header">
					<div className="header-wrapper">
						<Link href="/">
							<a
								className={
									currentRoute === "/"
										? "active"
										: "non-active"
								}
							>
								Home
							</a>
						</Link>
						<SubMenu />
						<Link href="/services">
							<a
								className={
									currentRoute === "/services"
										? "active"
										: "non-active"
								}
							>
								Membership
							</a>
						</Link>
						<Link href="/services">
							<a
								className={
									currentRoute === "/services"
										? "active"
										: "non-active"
								}
							>
								Shop
							</a>
						</Link>
						<div className="logo">
							{IconLogo}
							&nbsp; &nbsp;
							{TextLogo}
						</div>
						<Link href="/services">
							<a
								className={
									currentRoute === "/services"
										? "active"
										: "non-active"
								}
							>
								Specials
							</a>
						</Link>
						<Link href="/services">
							<a
								className={
									currentRoute === "/services"
										? "active"
										: "non-active"
								}
							>
								Blog
							</a>
						</Link>
						<Link href="/services">
							<a
								className={
									currentRoute === "/services"
										? "active"
										: "non-active"
								}
							>
								Become a provider
							</a>
						</Link>
						<Divider type="vertical" className="vertical-divider" />
						<Button size="middle" ghost className="border-btn">
							Book Now
						</Button>
						<Divider type="vertical" className="vertical-divider" />
						<Space
							direction={!screens?.xl ? "vertical" : "horizontal"}
							size={!screens?.xl ? 0 : "middle"}
						>
							<Button
								size="middle"
								type="primary"
								className="primary-btn"
							>
								Login to rmd
							</Button>
							<Button
								size="middle"
								type="primary"
								className="secondary-btn"
							>
								signup to rmd
							</Button>
						</Space>
					</div>
				</Header>
			)}

			<Drawer
				title=""
				placement="left"
				onClose={() => setIsMobile(false)}
				visible={isMobile}
				width="75%"
				className="side-drawer"
			>
				<div className="drawer-wrapper-bg">
					<Header className="bottom-header">
						<div className="header-wrapper">
							<Link href="/">
								<a
									className={
										currentRoute === "/"
											? "active"
											: "non-active"
									}
								>
									Home
								</a>
							</Link>

							<Menu
								theme="dark"
								// triggerSubMenuAction="click"
								mode="inline"
								className="submenu-container"
							>
								<Menu.SubMenu
									title="Services"
									popupClassName="submenu-popup-class"
									className="menu-container"
									popupOffset={[0, 0]}
									key="SubMenu"
								>
									<Row gutter={[16, 16]}>
										<Col xs={24} lg={8}>
											<Link href="">
												<a
													className={
														currentRoute ===
														"/dermal-filler"
															? "active-sub"
															: "non-active-sub"
													}
												>
													<Image
														src="/icons/dermal-filler.png"
														className="submenu-icon"
														alt="icon"
														preview={false}
													/>
													Botox/Dermal Fillers
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href=""
												className="submenu-link"
											>
												<a
													className={
														currentRoute ===
														"/dermal-filler"
															? "active-sub"
															: "non-active-sub"
													}
												>
													<Image
														src="/icons/dermal-filler-parties.png"
														className="submenu-icon"
														alt="icon"
														preview={false}
													/>
													Botox / Dermal Filler
													Parties
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href=""
												className="submenu-link"
											>
												<a
													className={
														currentRoute ===
														"/dermal-filler"
															? "active-sub"
															: "non-active-sub"
													}
												>
													<Image
														src="/icons/iv-bag.png"
														className="submenu-icon"
														alt="icon"
														preview={false}
													/>
													IV therapy
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href=""
												className="submenu-link"
											>
												<a
													className={
														currentRoute ===
														"/dermal-filler"
															? "active-sub"
															: "non-active-sub"
													}
												>
													<Image
														src="/icons/hormonal-therapy.png"
														className="submenu-icon"
														alt="icon"
														preview={false}
													/>
													Bioidentical Hormone
													Replacement Therapy
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href=""
												className="submenu-link"
											>
												<a
													className={
														currentRoute ===
														"/dermal-filler"
															? "active-sub"
															: "non-active-sub"
													}
												>
													<Image
														src="/icons/hormonal-ring.png"
														className="submenu-icon"
														alt="icon"
														preview={false}
													/>
													Tesosterone therapy
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href=""
												className="submenu-link"
											>
												<a
													className={
														currentRoute ===
														"/dermal-filler"
															? "active-sub"
															: "non-active-sub"
													}
												>
													<Image
														src="/icons/diet.png"
														className="submenu-icon"
														alt="icon"
														preview={false}
													/>
													Medical Weight Loss
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href=""
												className="submenu-link"
											>
												<a
													className={
														currentRoute ===
														"/dermal-filler"
															? "active-sub"
															: "non-active-sub"
													}
												>
													<Image
														src="/icons/slim-body.png"
														className="submenu-icon"
														alt="icon"
														preview={false}
													/>
													Peptide Therapy (Sermorelin/
													Ipamorelin)
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href=""
												className="submenu-link"
											>
												<a
													className={
														currentRoute ===
														"/dermal-filler"
															? "active-sub"
															: "non-active-sub"
													}
												>
													<Image
														src="/icons/flask.png"
														className="submenu-icon"
														alt="icon"
														preview={false}
													/>
													Mobile Labs/ Micronutrient
													Testing
												</a>
											</Link>
										</Col>
									</Row>
								</Menu.SubMenu>
							</Menu>

							<Link href="/services">
								<a
									className={
										currentRoute === "/services"
											? "active"
											: "non-active"
									}
								>
									Membership
								</a>
							</Link>
							<Link href="/services">
								<a
									className={
										currentRoute === "/services"
											? "active"
											: "non-active"
									}
								>
									Shop
								</a>
							</Link>
							<Link href="/services">
								<a
									className={
										currentRoute === "/services"
											? "active"
											: "non-active"
									}
								>
									Specials
								</a>
							</Link>
							<Link href="/services">
								<a
									className={
										currentRoute === "/services"
											? "active"
											: "non-active"
									}
								>
									Blog
								</a>
							</Link>
							<Link href="/services">
								<a
									className={
										currentRoute === "/services"
											? "active"
											: "non-active"
									}
								>
									Become a provider
								</a>
							</Link>

							<div className="side-nav-btns">
								<Button
									size="middle"
									ghost
									className="border-btn"
								>
									Book Now
								</Button>
								<Button
									size="middle"
									type="primary"
									className="promary-btn"
								>
									Login to rmd
								</Button>
								<Button
									size="middle"
									type="primary"
									className="promary-btn"
								>
									Signup to rmd
								</Button>
							</div>

							<div className="header-inline-item">
								<div className="hou-call">
									HOU : &nbsp;
									<a href="tel:832-770-7975">
										{CallIcon}
										&nbsp; (832) 770-7975
									</a>
								</div>
								<div className="training-call">
									Training :&nbsp;
									<a href="tel:832-953-0313">
										{PhoneTextIcon}
										&nbsp; (832) 953-0313
									</a>
								</div>
							</div>

							<Space
								align="center"
								wrap
								style={{ marginTop: "2rem" }}
								size="middle"
							>
								{LinkdinIcon}
								{MessengerIcon}
								{TwitterIcon}
								{TwooIcon}
							</Space>
						</div>
					</Header>
				</div>
			</Drawer>
			<Content>
				<div className="site-layout-content">{children}</div>
			</Content>
			<Footer className="footer-container">
				<div className="layout-wrapper">
					<Row gutter={[32, 32]}>
						<Col xs={24} lg={6}>
							{FooterIcon}
							<p className="slogan-text">
								Simple innate summer fat appear basket his
								desire joy.
							</p>
							<Space align="center" wrap>
								{LinkdinIcon}
								{MessengerIcon}
								{TwitterIcon}
								{TwooIcon}
							</Space>
						</Col>
						<Col xs={24} lg={18}>
							<List
								className="footer-list"
								header={
									<Row>
										{footer?.map((list, key) => (
											<Col xs={6} key={key}>
												<p className="list-heading">
													{list?.title}
												</p>
											</Col>
										))}
									</Row>
								}
								grid={{
									xs: 4,
									sm: 4,
									md: 4,
									lg: 4,
									xl: 4,
									xxl: 4,
									gutter: [16, 64],
								}}
								dataSource={footer}
								renderItem={(item) => (
									<List.Item>
										{item?.list?.map((list, key) => (
											<List.Item
												key={key}
												className="list-item"
											>
												<Link href="/">{list}</Link>
											</List.Item>
										))}
									</List.Item>
								)}
							/>
						</Col>
					</Row>

					<Divider className="footer-divider" />
					<p className="term-text">
						© 2020-22 ReplenishMD ‧ Terms of Use ‧ Membership Terms
						&amp; Conditions ‧ Privacy Policy ‧
					</p>
				</div>
			</Footer>
		</Layout>
	);
};

LayoutWrapper.propTypes = propTypes;

export default LayoutWrapper;
