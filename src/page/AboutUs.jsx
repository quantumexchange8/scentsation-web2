import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import About from "../components/home-one/about";
import FragranceCollection from "../components/home-one/fragranceCollection";
import WhyChooseUs from "../components/home-one/why-choose-us";

function AboutUs() {
	return (
		<>
			<BreadCrumb title="About Us" />
			<About />
			<WhyChooseUs />
			<FragranceCollection />

			
		</>
	);
}

export default AboutUs;
