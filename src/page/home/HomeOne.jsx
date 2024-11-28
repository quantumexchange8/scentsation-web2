import Hero from "../../components/home-one/hero";
import Services from "../../components/home-one/services";
import Cta from "../../components/home-one/cta";
import Introduction from "../../components/home-one/introduction";
import Step from "../../components/home-one/step";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Instant Access",
		description:
			"Enjoy high-quality scents right when you need them.",
		// icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Luxury Made Affordable",
		description:
			"Only pay for the fragrance you use, with options from renowned brands.",
		// icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Sustainable Practices",
		description:
			"We’re committed to minimal waste, offering eco-friendly refill options and recyclable materials.",
		// icon: "icon-web",
	},
];

function HomeOne() {
	return (
		<>
			<Hero />
			<Introduction />
			<Step />
			<Services services={servicesData} />
			<Cta />
		</>
	);
}

export default HomeOne;
