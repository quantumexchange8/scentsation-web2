import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha"; // Import ReCAPTCHA
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
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState(""); // Store the reCAPTCHA token

  const submitForm = async (formData) => {
	try {
      // Construct formDataWithToken including the reCAPTCHA token
      const formDataWithToken = { ...formData, recaptchaToken };
  
      // Send the data to the backend
      const response = await axios.post("http://localhost:5000/contact-us", formDataWithToken);
  
      // Handle success
      const messageContainer = document.querySelector(".message-container");
      if (messageContainer) {
        messageContainer.innerHTML =
          '<div class="alert alert-success">Your message has been sent successfully!</div>';
      }  
      setErrorMessage(""); // Clear error messages
    } catch (error) {
      // Handle errors
      const messageContainer = document.querySelector(".message-container");
      if (messageContainer) {
        messageContainer.innerHTML =
          '<div class="alert alert-danger">Failed to send your message. Please try again later.</div>';
      }
      setSuccessMessage(""); // Clear success messages
    }
  };
  
  const handleRecaptcha = (token) => {
    setRecaptchaToken(token); // Set the reCAPTCHA token

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
			  <div className="message-container"></div>
			  <div className="message-container"></div>

			    <div className="message-container"></div>

              <form onSubmit={handleSubmit(submitForm)}>
                <div className="aximo-main-field">
                  <Field label="Name" error={errors.name}>
                    <input
                      {...register("name", { required: "Name is required." })}
                      type="text"
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
                    defaultValue="" // Use defaultValue here
                    >
                    <option value="" disabled>-- Select an option --</option>
                    <option value="venue-owner">Venue Owner</option>
                    <option value="fragrance-brand">Fragrance Brand</option>
                    <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <label>Write your message here...</label>
                  <textarea {...register("message", { required: "Message is required." })}></textarea>
                </div>
				{/* Add reCAPTCHA */}
                <div className="aximo-main-field">
                  <ReCAPTCHA
                    sitekey="6LeNjmkqAAAAAPJSevDBKVg3vN2-tagpgZyktR3P" // Replace with your reCAPTCHA v3 site key
                    onChange={handleRecaptcha}
                  />
				  
                </div>
                <button id="aximo-main-btn" type="submit">
                  Send Message
                </button>
              </form>
              {successMessage && <div className="success-message">{successMessage}</div>}
              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
