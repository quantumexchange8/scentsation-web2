import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import Introduction from "../../components/home-one/introduction";
import Step from "../../components/home-one/step";

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Instant Access",
		description:
			"Enjoy high-quality scents right when you need them.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Luxury Made Affordable",
		description:
			"Only pay for the fragrance you use, with options from renowned brands.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Sustainable Practices",
		description:
			"We’re committed to minimal waste, offering eco-friendly refill options and recyclable materials.",
		icon: "icon-web",
	},
];

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Andrew Mark",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jack Taylor",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team4Img,
	},
];

function HomeOne() {
	return (
		<>
			<Hero />
			<Introduction />
			<Step />
			<Services services={servicesData} />
			{/* <About /> */}
			{/* <Projects /> */}
			{/* <WhyChooseUs /> */}
			{/* <Testimonial /> */}
			{/* <AutoSlider /> */}
			{/* <Teams teams={teamsData} /> */}
		</>
	);
}

export default HomeOne;
