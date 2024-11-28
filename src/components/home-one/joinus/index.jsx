import CheckImg from "../../../assets/images/v3/check.svg";
import Shape1Img from "../../../assets/images/v3/shape1.png";
import Thumb2Img from "../../../assets/images/v3/partner.jpg";
import FadeInRight from "../../animation/FadeInRight";
import { Link } from "react-router-dom";
function JoinUs() {
	return (
		<div className="section aximo-section-padding overflow-hidden">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-1 offset-lg-1">
						<FadeInRight className="aximo-content-thumb ">
							<img src={Thumb2Img} alt="Thumb2Img" />
						</FadeInRight>
					</div>
					<div className="col-lg-6">
						<div className="aximo-default-content familjen-grotesk">
							<h2>Partner With Us</h2>
							<p>
							There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or words even slightly believable.
							</p>
							<div className="aximo-list-icon">
								<ul>
									<li>
										<img src={CheckImg} alt="CheckImg" /> For Venues
									</li>
									<p>Increase patron satisfaction and generate passive income by hosting a ScentsationGlobal machine.</p>
									<li>
										<img src={CheckImg} alt="CheckImg" /> For Brands
									</li>
									<p>Reach your audience directly with pay-per-spray exposure and custom ad placements on our digital screens.</p>
								</ul>
							</div>
							<Link className="aximo-call-btn" to="/about-us">
							Become a Partner
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JoinUs;
