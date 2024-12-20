import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";

function NumberBox() {
	return (
		<div className="aximo-numberbox-section">
			<div className="container">
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
