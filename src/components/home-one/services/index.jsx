import Star2Img from "../../../assets/images/v1/star2.png";
import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

function Services({ services }) {
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Why Choose Scentsation?
						<span className="aximo-title-animation">
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="aximo-service-wrap">
					<div className="row">
						{services.map((item, index) => (
							<FadeInStagger key={item.id} index={index} className="col-lg-4">
								<ServiceCard service={item} />
							</FadeInStagger>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
