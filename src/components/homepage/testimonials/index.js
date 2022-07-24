import React from "react";
import { Image } from "antd";

const Testimonials = () => {
	return (
		<div className="testimonial-wrapper">
			<div className="layout-wrapper">
				<h1 className="main-heading">Testimonials</h1>
				<Image
					src="/icons/quotation-mark.png"
					className="main-logo"
					alt="logo"
					preview={false}
				/>
				<p className="_content">
					The aesthetics training course provided by ReplenishMD was
					exceptional. The 2-day training started with an informative
					didactic portion in the morning. The second part of each day
					trainees had the opportunity to practice their newly learned
					skills, both fillers and Botox, on real models. The
					instructor was extremely supportive, hands-on, and eager to
					answer questions and offer further guidance to trainees when
					needed. I found the instructor’s attention to detail in
					regards to precise techniques and the safest practices were
					extremely beneficial to my learning. I highly recommend this
					training course to future medical professionals wishing to
					pursue a career in aesthetics.
				</p>
				<p className="author-name">Kenzy Timmons</p>
			</div>
		</div>
	);
};

export default Testimonials;
