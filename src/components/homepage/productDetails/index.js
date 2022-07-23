import React from "react";
import { Image, Button } from "antd";

const ProductDetails = () => {
	return (
		<div className="product-detail-wrapper">
			<div className="layout-wrapper">
				<div className="logo">
					<Image
						src="/icons/logo2.png"
						className="main-logo"
						alt="logo"
						preview={false}
					/>{" "}
					&nbsp; &nbsp;
					<Image
						src="/icons/logo-black.png"
						className="main-logo"
						alt="logo"
						preview={false}
					/>
				</div>
				<h1 className="main-heading">Preserving Your Natural Beauty</h1>
				<p className="content">
					At Replenish MD our expert staff is dedicated to providing
					our clients with the most advanced and refined cosmetic
					treatments available. The goal of our treatments is to
					enhance your appearance, reverse the signs of aging and
					restore youth while preserving your natural beauty. Our
					providers build confidence by taking the time to understand
					each of our client&lsquo;s personal concerns and aesthetic
					goals to build a deep and lasting relationship with our
					patients.
					<br />
					<br />
					Based on their medical experience and knowledge of cosmetic
					procedures, our doctors make authentic recommendations for
					treatment. They consider all aspects of the client such as
					age, genetics, desires, and lifestyle to create a full,
					restorative treatment plan that works with your facial
					features and is true to you for undetectable results.
				</p>
				<Button size="large" type="primary" className="more-btn">
					learn more
				</Button>
			</div>
		</div>
	);
};

export default ProductDetails;
