import React from "react";
import { Button, Row, Col } from "antd";
import ContactCard from "src/common/contactCard";

const ContactDetails = () => {
	const contactArr = [
		{
			primaryText: "Replenish # 1",
			content: "5103 Bellaire Blvd #220, ste 225 Bellaire, TX 77401",
			secondary: "",
		},
		{
			primaryText: "Contact Details",
			content: "(832) 770-7975",
			secondary: "Call/Text- are for a consultation",
		},
		{
			primaryText: "Replenish # 2",
			content: "1818 Washington Ave Ste 220A, #7 Houston, TX 77007",
			secondary: "",
		},
		{
			primaryText: "Contact Details",
			content: "(832) 953-0313",
			secondary: "Call/Text- are for a consultation",
		},
		{
			primaryText: "Replenish # 3",
			content: "8555 Westheimer Rd ste 121, Houston, TX 77063",
			secondary: "",
		},
		{
			primaryText: "Contact Details",
			content: "(832) 770-7975",
			secondary: "Call/Text- are for a consultation",
		},
		{
			primaryText: "Replenish # 4",
			content: "9701 richmond ave, ste 250, 77042",
			secondary: "",
		},
		{
			primaryText: "Contact Details",
			content: "(832) 953-0313",
			secondary: "Call/Text- are for a consultation",
		},
	];

	return (
		<div className="contact-detail-wrapper">
			<div className="layout-wrapper">
				<p className="top-heading">
					Ready to scheduled your event or treatment
				</p>
				<Row gutter={[32, 32]}>
					{contactArr?.map((arr, key) => (
						<Col sm={12} key={key}>
							<ContactCard
								primaryText={arr.primaryText}
								content={arr.content}
								secondaryText={arr.secondary}
							/>
						</Col>
					))}
				</Row>
				<Button size="large" type="primary" className="book-btn">
					Book Now
				</Button>
			</div>
		</div>
	);
};

export default ContactDetails;
