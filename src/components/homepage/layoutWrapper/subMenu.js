import React from "react";
import { useRouter } from "next/router";
import { Image, Row, Col, Menu } from "antd";
import Link from "next/link";

export const SubMenu = () => {
	const router = useRouter();
	const currentRoute = router.pathname;
	return (
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
									currentRoute === "/dermal-filler"
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
									currentRoute === "/dermal-filler"
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
									currentRoute === "/dermal-filler"
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
									currentRoute === "/dermal-filler"
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
								Bioidentical Hormone Replacement Therapy
							</a>
						</Link>
					</Col>
					<Col xs={8}>
						<Link href="" className="submenu-link">
							<a
								className={
									currentRoute === "/dermal-filler"
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
									currentRoute === "/dermal-filler"
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
									currentRoute === "/dermal-filler"
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
								Peptide Therapy (Sermorelin/ Ipamorelin)
							</a>
						</Link>
					</Col>
					<Col xs={8}>
						<Link href="" className="submenu-link">
							<a
								className={
									currentRoute === "/dermal-filler"
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
								Mobile Labs/ Micronutrient Testing
							</a>
						</Link>
					</Col>
				</Row>
			</Menu.SubMenu>
		</Menu>
	);
};
