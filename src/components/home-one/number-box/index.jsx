import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
import Machine2 from "../../../assets/images/scentsation/machine2.png";
import Shape2Img from "../../../assets/images/v4/shape2.png";
import FadeInLeft from "../../animation/FadeInLeft";

function NumberBox() {
	return (
		<div className="aximo-numberbox-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb border-radius ">
							<img src={Machine2} alt="Machine2" />
							<div className="aximo-thumb-shape4">
								<img src={Shape2Img} alt="Shape2Img" />
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-7 d-flex align-items-center">
						<div className="w-100">
							<div className="arimo-font text-center">
								{/* <span className="aximo-subtitle">Why choose us</span> */}
								<h2>How To Use</h2>
								<span>   <br/> </span>
							</div>
						</div>
					</div>
				</div>
				<FadeInStaggerTwo className="row">
					<FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
						<div className="aximo-numberbox-wrap">
							<div className="aximo-numberbox-number">1</div>
							<div className="aximo-numberbox-data">
								<p>
									<span>Select your desired perfume.</span>
								</p>
								<p> </p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
						<div className="aximo-numberbox-wrap">
							<div className="aximo-numberbox-number">2</div>
							<div className="aximo-numberbox-data">
								<p>
									<span>Insert coins, bills, or tap the card.</span>
								</p>
								<p> </p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
						<div className="aximo-numberbox-wrap">
							<div className="aximo-numberbox-number">3</div>
							<div className="aximo-numberbox-data">
								<p>
									<span>Guide your wrist or neck to the selected dispenser.</span>
								</p>
								<p> </p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
						<div className="aximo-numberbox-wrap">
							<div className="aximo-numberbox-number">4</div>
							<div className="aximo-numberbox-data">
								<p>
									<span>Press the button for the selected perfume.</span>
								</p>
								<p> </p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
						<div className="aximo-numberbox-wrap">
							<div className="aximo-numberbox-number">5</div>
							<div className="aximo-numberbox-data">
								<p>
									<span>Moisten your wrist and rub the perfume on the neck area.</span>
								</p>
								<p> </p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default NumberBox;
