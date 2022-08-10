import { Card } from "antd";
import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	primaryText: PropTypes.string,
	content: PropTypes.string,
	secondaryText: PropTypes.string,
	phoneNumber: PropTypes.string,
};

const ContactCard = ({ primaryText, content, secondaryText, phoneNumber }) => {
	return (
		<div className="contact-card-wrapper">
			<Card className="contact-card">
				<p className="primary-text">{primaryText}</p>
				<h1 className="main-text">
					<a href={`tel:${phoneNumber}`} style={{ color: "#fff" }}>
						&nbsp; {phoneNumber}
					</a>
					{content}
				</h1>
				<p className="secondary-text">{secondaryText}</p>
			</Card>
		</div>
	);
};

ContactCard.propTypes = propTypes;

export default ContactCard;
