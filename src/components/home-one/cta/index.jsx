import { Link } from "react-router-dom";
import Shape4Img from "../../../assets/images/v2/shape4.png";
import StarImg from "../../../assets/images/v2/star.png";
import FadeInUp from "../../animation/FadeInUp";
function CallToAction() {
	return (
		<div className="aximo-cta-section aximo-section-padding extra-side-margin position-relative">
			<div className="container">
				<div className="aximo-cta-wrap">
				<span className="aximo-white-subtitle">For Venue Partners</span>
					<h2>We work with venues to create an elevated patron experience</h2>
					<p>Our machines increase customer satisfaction, provide a passive income stream, and come with built-in digital advertising to enhance the ambiance. All installation, maintenance, and refill services are handled by our team, making it a seamless addition for your venue.</p>
					<FadeInUp>
						<Link className="aximo-default-btn" to="/partnership">
							<span className="aximo-label-up">Learn More</span>
							<span className="aximo-label-up">Learn More</span>
						</Link>
					</FadeInUp>
				</div>
			</div>
			<div className="aximo-cta-shape1">
				<img src={Shape4Img} alt="Shape4Img" />
			</div>
			<div className="aximo-cta-shape2">
				<img src={StarImg} alt="StarImg" />
			</div>
		</div>
	);
}

export default CallToAction;
