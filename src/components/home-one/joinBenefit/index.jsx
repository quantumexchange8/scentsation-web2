import Icon1Img from "../../../assets/images/v3/icon1.svg";
import Icon2Img from "../../../assets/images/v3/icon2.svg";
import Icon3Img from "../../../assets/images/v3/icon3.svg";
import StarShapeHalfImg from "../../../assets/images/v3/star-shape-half.png";
import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";
const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Increased brand visibility in nightlife settings.",
		description:
			" ",
		// img: Icon1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Real-time customer usage data.",
		description:
			" ",
		// img: Icon2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Sustainable, brand-aligned experiences.",
		description:
			" ",
		// img: Icon3Img,
	},
];
function joinBenefit() {
	return (
		<div className="section aximo-section-padding dark-bg overflow-hidden position-relative">
			<div className="container">
				<div className="aximo-section-title center familjen-grotesk light">
					<h2>Benefits of Partnership</h2>
				</div>
				<div className="aximo-iconbox-column">
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index}>
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>

			<div className="aximo-iconbox-shape">
				<img src={StarShapeHalfImg} alt="StarShapeHalfImg" />
			</div>
		</div>
	);
}

export default joinBenefit;
