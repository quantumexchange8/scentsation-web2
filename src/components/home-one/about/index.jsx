import Video from "./Video";
import Star2Img from "../../../assets/images/v1/star2.png";
import AboutCounter from "./AboutCounter";


function About() {
	return (
		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title">
					<div className="row">
						<div className="col-lg-5">
							<h2>
								<span className="aximo-title-animation">
									Story of Scentsation
									<span className="aximo-title-icon">
										<img src={Star2Img} alt="Star2Img" />
									</span>
									
								</span>{" "}
							</h2>
							<p>
								Founded in 2024, Scentsation was created from a passion for fragrance and a drive to make premium scents accessible in exciting new ways. Inspired by the energy of nightlife, we set out to provide patrons with convenient, luxurious, and eco-conscious fragrance options for the perfect finishing touch.
							</p>
						</div>
						<div className="col-lg-6 offset-lg-1 d-flex align-items-center">
						<AboutCounter />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
