import Shape2Img from "../../../assets/images/v4/shape2.png";
import Thumb1Img from "../../../assets/images/v4/thumb1.png";
import FadeInLeft from "../../animation/FadeInLeft";
import Machine1 from "../../../assets/images/scentsation/machine1.png";

function introduction() {
	return (
		<div className="section aximo-intro-padding4">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb border-radius ">
							<img src={Machine1} alt="Thumb1Img" />
							<div className="aximo-thumb-shape4">
								<img src={Shape2Img} alt="Shape2Img" />
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="aximo-default-content arimo-font m-left-gap">
							<span className="aximo-subtitle">Our Introduction</span>
							<h2>We’re Revolutionizing The Fragrance Experience</h2>
							<p>
                            Our innovative vending machines allow patrons instant access to top-tier fragrances on a pay-per-spray basis, giving them a fresh, luxurious experience whenever they want.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default introduction;
