import { useForm } from "react-hook-form";
import ContactThumb from "../../assets/images/contact/contact-thumb.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";

function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="aximo-section-title">
							<h2>
								<span className="aximo-title-animation">
									Contact us
									<span className="aximo-title-icon">
										<img src={Star2Img} alt="Star" />
									</span>
								</span>
							</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="aximo-contact-thumb ">
							<img src={ContactThumb} alt="Contact Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="aximo-main-form">
							<form onSubmit={handleSubmit(submitForm)}>
								<div className="aximo-main-field">
									<Field label="Name" error={errors.name}>
										<input
											{...register("name", { required: "Name is required." })}
											type="name"
											name="name"
											id="name"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Email Address" error={errors.email}>
										<input
											{...register("email", { required: "Email is required." })}
											type="email"
											name="email"
											id="email"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="I am a:" error={errors.userType}>
										<select
										{...register("userType", { required: "Please select an option." })}
										name="userType"
										id="userType"
										>
										<option value="">-- Select an option --</option>
										<option value="venue-owner">Venue Owner</option>
										<option value="fragrance-brand">Fragrance Brand</option>
										<option value="general-inquiry">General Inquiry</option>
										</select>
									</Field>
								</div>
								<div className="aximo-main-field">
									<label>Write your message here...</label>
									<textarea name="textarea"></textarea>
								</div>
								<button id="aximo-main-btn" type="submit">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
