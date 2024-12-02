import { Link } from "react-router-dom";
function ProjectCard({ project: { title, description, img } }) {
	return (
		<div className="swiper-slide">
			<div className="aximo-project-thumb">
				<img src={img} alt={title} />
				<div className="aximo-project-wrap">
					<div className="aximo-project-data">
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
