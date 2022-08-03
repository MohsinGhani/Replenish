import React from "react";
import { useRouter } from "next/router";
import { Image, Row, Col, Menu } from "antd";
import Link from "next/link";
import { DermalFiller2Icon } from "src/components/SVGImageIcon/dermalFiller2Icon";
import { DermalFillerIcon } from "src/components/SVGImageIcon/dermalFillerIcon";
import { IVBagIcon } from "src/components/SVGImageIcon/iVBagIcon";
import { HormonalTherapyIcon } from "src/components/SVGImageIcon/HormonalTherapyIcon";
import { HormonalRingIcon } from "src/components/SVGImageIcon/hormonalRingIcon";
import { DietIcon } from "src/components/SVGImageIcon/dietIcon";
import { FlaskIcon } from "src/components/SVGImageIcon/flaskIcon";
import { SlimBodyIcon } from "src/components/SVGImageIcon/slimBodyIcon";
import PropTypes from "prop-types";

const propTypes = {
	subMenuMode: PropTypes.string.isRequired,
};

export const SubMenu = ({ subMenuMode }) => {
	SubMenu.propTypes = propTypes;

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
								{/* {DermalFillerIcon} */}
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
								{/* {DermalFiller2Icon} */}
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
								{/* {IVBagIcon} */}
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
								{/* {HormonalTherapyIcon} */}
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
								{/* {HormonalRingIcon} */}
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
								{/* {DietIcon} */}
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
								{/* {SlimBodyIcon} */}
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
								{/* {FlaskIcon} */}
								Mobile Labs/ Micronutrient Testing
							</a>
						</Link>
					</Col>
				</Row>
			</Menu.SubMenu>
		</Menu>
	);
};

// export default SubMenu;
