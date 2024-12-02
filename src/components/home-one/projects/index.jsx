import Star2Img from "../../../assets/images/v1/star2.png";
import Project1Img from "../../../assets/images/v1/project1.png";
import Project2Img from "../../../assets/images/v1/project2.png";
import Project3Img from "../../../assets/images/v1/project3.png";
import Project4Img from "../../../assets/images/v1/project4.png";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Increased brand visibility in nightlife settings.",
		description: " ",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Real-time customer usage data.",
		description: " ",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Sustainable, brand-aligned experiences.",
		description: " ",
		img: Project3Img,
	},
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
					Benefits of Partnership
					</h2>
				</div>
				<div className="swiper aximo-project-slider">
					<Swiper {...swiperSettings}>
						{projectsData.map((project) => (
							<SwiperSlide key={project.id}>
								<ProjectCard project={project} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default Projects;
