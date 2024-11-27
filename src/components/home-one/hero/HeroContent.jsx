import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import Machine3 from "../../../assets/images/scentsation/machine3.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<div className="aximo-hero-content">
			<FadeInStaggerTwo>
				<FadeInStaggerTwoChildren>
					<h1>
						<span className="aximo-title-animation">
							Refresh Your Nightlife Experience
							<img src={StarImg} alt="StarImg" />
						</span>
					</h1>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<p>
						{`On-demand access to premium fragrances, perfect for a night out. Scentsation brings luxury pay-per-spray fragrance solutions to nightlife venues worldwide.`}
					</p>
				</FadeInStaggerTwoChildren>

				<FadeInStaggerTwoChildren>
					<Link className="aximo-call-btn" to="/contact-us">
						Discover More <i className="icon-call"></i>
					</Link>
					<div className="aximo-hero-shape">
						<img src={ShapeImg} alt="ShapeImg" />
					</div>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
