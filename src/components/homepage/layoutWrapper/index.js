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
import { AlignRightOutlined } from "@ant-design/icons";

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
				"Health Concerns",
				"Recipes & Nutrition",
				"Optimizations",
				"News",
				"Guides",
			],
		},
		{
			title: "Company",
			list: ["Mission", "Origin", "Careers", "Team", "Press"],
		},
		{
			title: "Help & Support",
			list: [
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
					<div className="header-inline-item">
						<p className="hou-call">
							HOU : &nbsp;
							<Image
								src="/icons/Call.png"
								className="call-icon"
								alt="icon"
							/>
							&nbsp; (832) 770-7975
						</p>
						<p className="training-call">
							Training :&nbsp;
							<Image
								src="/icons/Call.png"
								className="call-icon"
								alt="icon"
							/>
							&nbsp; (832) 953-0313
						</p>
					</div>
					<Space align="center" wrap>
						<Image
							src="/icons/linkedin.png"
							className="social-icon"
							alt="icon"
							preview={false}
						/>
						<Image
							src="/icons/messenger.png"
							className="social-icon"
							alt="icon"
							preview={false}
						/>
						<Image
							src="/icons/twitter.png"
							className="social-icon"
							alt="icon"
							preview={false}
						/>
						<Image
							src="/icons/twoo.png"
							className="social-icon"
							alt="icon"
							preview={false}
						/>
					</Space>
				</div>
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

						<Menu
							theme="dark"
							// triggerSubMenuAction="click"
							mode="horizontal"
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
									<Col xs={8}>
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
									<Col xs={8}>
										<Link href="" className="submenu-link">
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
												Botox / Dermal Filler Parties
											</a>
										</Link>
									</Col>
									<Col xs={8}>
										<Link href="" className="submenu-link">
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
									<Col xs={8}>
										<Link href="" className="submenu-link">
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
												Bioidentical Hormone Replacement
												Therapy
											</a>
										</Link>
									</Col>
									<Col xs={8}>
										<Link href="" className="submenu-link">
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
									<Col xs={8}>
										<Link href="" className="submenu-link">
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
									<Col xs={8}>
										<Link href="" className="submenu-link">
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
									<Col xs={8}>
										<Link href="" className="submenu-link">
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
						<div className="logo">
							<Image
								src="/icons/logo2.png"
								className="main-logo"
								alt="logo"
								preview={false}
							/>
							&nbsp; &nbsp;
							<Image
								src="/icons/logo1.png"
								className="main-logo"
								alt="logo"
								preview={false}
							/>
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
						<Button size="middle" ghost className="border-btn">
							Book Now
						</Button>
						<Button
							size="middle"
							type="primary"
							className="promary-btn"
						>
							Login
						</Button>
					</div>
				</Header>
			)}
			{!screens.lg ? (
				<AlignRightOutlined
					className="side-nav-icon"
					onClick={() => setIsMobile(true)}
				/>
			) : (
				""
			)}
			<Drawer
				title="Nav Menu"
				placement="left"
				onClose={() => setIsMobile(false)}
				visible={isMobile}
				width="75%"
				className="side-drawer"
			>
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
										<Link href="" className="submenu-link">
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
												Botox / Dermal Filler Parties
											</a>
										</Link>
									</Col>
									<Col xs={24} lg={8}>
										<Link href="" className="submenu-link">
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
										<Link href="" className="submenu-link">
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
												Bioidentical Hormone Replacement
												Therapy
											</a>
										</Link>
									</Col>
									<Col xs={24} lg={8}>
										<Link href="" className="submenu-link">
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
										<Link href="" className="submenu-link">
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
										<Link href="" className="submenu-link">
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
										<Link href="" className="submenu-link">
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
						<div className="logo">
							<Image
								src="/icons/logo2.png"
								className="main-logo"
								alt="logo"
								preview={false}
							/>{" "}
							&nbsp; &nbsp;
							<Image
								src="/icons/logo1.png"
								className="main-logo"
								alt="logo"
								preview={false}
							/>
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
						<Space size={100} align="center">
							<Button size="middle" ghost className="border-btn">
								Book Now
							</Button>
							<Button
								size="middle"
								type="primary"
								className="promary-btn"
							>
								Login
							</Button>
						</Space>
					</div>
				</Header>
			</Drawer>
			<Content>
				<div className="site-layout-content">{children}</div>
			</Content>
			<Footer className="footer-container">
				<div className="layout-wrapper">
					<Row gutter={[32, 32]}>
						<Col xs={0} md={6}>
							<Image
								src="/icons/footer-logo.png"
								alt="icon"
								preview={false}
							/>
							<p className="logo-slogan-text">
								Power by ReplenishMD
							</p>
							<p className="slogan-text">
								Simple innate summer fat appear basket his
								desire joy.
							</p>
							<Space align="center" wrap>
								<Image
									src="/icons/linkedin.png"
									className="social-icon"
									alt="icon"
									preview={false}
								/>
								<Image
									src="/icons/messenger.png"
									className="social-icon"
									alt="icon"
									preview={false}
								/>
								<Image
									src="/icons/twitter.png"
									className="social-icon"
									alt="icon"
									preview={false}
								/>
								<Image
									src="/icons/twoo.png"
									className="social-icon"
									alt="icon"
									preview={false}
								/>
							</Space>
						</Col>
						<Col xs={24} md={18}>
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
