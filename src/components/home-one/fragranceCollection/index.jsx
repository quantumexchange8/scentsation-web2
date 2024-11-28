import StarImg from "../../../assets/images/v2/shape-star.png";
import Thumb1Img from "../../../assets/images/v2/h-thumb1.png";
import Thumb2Img from "../../../assets/images/v2/h-thumb2.png";
import Thumb3Img from "../../../assets/images/v2/h-thumb3.png";
import Thumb4Img from "../../../assets/images/v2/h-thumb4.png";
import Thumb5Img from "../../../assets/images/v2/h-thumb5.png";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Exclusive Scents",
		description:
			"Our curated selection includes bestsellers and exclusive collaborations from the world’s top fragrance houses. Choose from categories like Fresh, Floral, Woodsy, and Oriental to match your mood or style.",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Eco-Friendly Refill",
		description:
			"We are dedicated to reducing waste. All ScentsationGlobal fragrances come in recyclable containers, and our refill practices are designed to minimize environmental impact.",
		img: Thumb2Img,
	},
];

function fragranceCollection() {
	return (
		<div className="section aximo-section-padding position-relative">
			<div className="container">
				<div className="aximo-section-title center clash-grotesk">
					<h2>Fragrance Collection</h2>
				</div>
			</div>
			<div className="aximo-increase-shape">
				<img src={StarImg} alt="StarImg" />
			</div>
			<div className="aximo-service-increase-wrap">
				{servicesData.map((service) => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>
		</div>
	);
}

export default fragranceCollection;
