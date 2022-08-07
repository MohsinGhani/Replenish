import { Carousel } from "antd";
import React from "react";
import { QouteIcon } from "src/components/SVGImageIcon/qouteIcon";

const Testimonials = () => {
	return (
		<div className="testimonial-wrapper">
			<div className="layout-wrapper">
				<h1 className="main-heading">Testimonials</h1>
				{QouteIcon}
				<Carousel
					className="banners"
					effect="fade"
					// autoplay
					dots={{ className: "custom-dot" }}
				>
					<div>
						<p className="_content">
							At Replenish our expert staff is dedicated to
							providing our clients with the most advanced and
							refined cosmetic treatments available. The goal of
							our treatments is to enhance your appearance,
							reverse the signs of aging and restore youth while
							preserving your natural beauty. Our providers build
							confidence by taking the time to understand each of
							our client's personal concerns and aesthetic goals
							to build a deep and lasting relationship with our
							patients. Based on their medical experience and
							knowledge of cosmetic procedures, our doctors make
							authentic recommendations for treatment. They
							consider all aspects of the client such as age,
							genetics, desires, and lifestyle to create a full,
							restorative treatment plan that works with your
							facial features and is true to you for undetectable
							results.
						</p>
						<p className="author-name">J. D.</p>
					</div>
					<div>
						<p className="_content">
							Marucci listens to everything I want in the bat and
							delivers exactly that every time..
						</p>
						<p className="author-name">Z. D.</p>
					</div>
					<div>
						<p className="_content">
							How to solve my issue with my razor&apos;s
							lubrication strip disintegrating was explained
							promptly and politely. And a free pack of cartridges
							was sent to compensate. Excellent service.
						</p>
						<p className="author-name">A. Z.</p>
					</div>
					<div>
						<p className="_content">
							When it comes to backlink analysis, Ahrefs is my #1
							go-to tool. If you’re serious about SEO, you need
							Ahrefs
						</p>
						<p className="author-name">M. K.</p>
					</div>
					<div>
						<p className="_content">
							The aesthetics training course provided by
							ReplenishMD was exceptional. The 2-day training
							started with an informative didactic portion in the
							morning. The second part of each day trainees had
							the opportunity to practice their newly learned
							skills, both fillers and Botox, on real models. The
							instructor was extremely supportive, hands-on, and
							eager to answer questions and offer further guidance
							to trainees when needed. I found the instructor’s
							attention to detail in regards to precise techniques
							and the safest practices were extremely beneficial
							to my learning. I highly recommend this training
							course to future medical professionals wishing to
							pursue a career in aesthetics.
						</p>
						<p className="author-name">K. T.</p>
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default Testimonials;
