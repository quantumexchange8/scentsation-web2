import BreadCrumb from "../components/common/Breadcrumb";
import JoinUs from "../components/home-one/joinus";
import BenefitJoin from "../components/home-one/joinBenefit";
import Project from "../components/home-one/projects";

function Partnership() {
	return (
		<>
			<BreadCrumb title="Partnership" />
			<JoinUs />
			{/* <BenefitJoin /> */}
			<Project />
		</>
	);
}

export default Partnership;
