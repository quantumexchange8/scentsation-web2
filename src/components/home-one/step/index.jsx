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
									<span>Locate</span>
								</p>
								<p>Locate a Scentsation machine in your venue.</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
						<div className="aximo-numberbox-wrap">
							<div className="aximo-numberbox-number">2</div>
							<div className="aximo-numberbox-data">
								<p>
									<span>Select</span>
								</p>
								<p>Select a fragrance from our exclusive collection.</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
						<div className="aximo-numberbox-wrap">
							<div className="aximo-numberbox-number">3</div>
							<div className="aximo-numberbox-data">
								<p>
									<span>Pay</span>
								</p>
								<p>Tap to pay via secure digital payment, and enjoy your spray.</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default NumberBox;
