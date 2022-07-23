import React from "react";
import ContactDetails from "src/components/homepage/contactDetails";
import LandingBanner from "src/components/homepage/landingBanner";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import ProductDetails from "src/components/homepage/productDetails";
import ServicesDetails from "src/components/homepage/servicesDetails";
import Testimonials from "src/components/homepage/testimonials";

const propTypes = {};

const defaultProps = {};

const Index = (props) => {
	return (
		<LayoutWrapper>
			<LandingBanner />
			<ProductDetails />
			<ServicesDetails />
			<ContactDetails />
			<Testimonials />
		</LayoutWrapper>
	);
};

Index.propTypes = propTypes;

Index.defaultProps = defaultProps;

export default Index;
