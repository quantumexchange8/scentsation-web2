import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ContactThumb from "../../assets/images/contact/contact-thumb.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset, // To reset the form
    formState: { errors },
  } = useForm();
  
  const [userCaptcha, setUserCaptcha] = useState(""); // State to store user input

  const submitForm = async (formData) => {
    // Captcha validation before form submission
    if (validateCaptcha(userCaptcha)) {
      try {
        const response = await axios.post("http://localhost:5000/contact-us", formData);

        const messageContainer = document.querySelector(".message-container");
        if (messageContainer) {
          messageContainer.innerHTML =
            '<div class="alert alert-success">Your message has been sent successfully!</div>';
        }

        // Reset the form fields on success
        reset();
        loadCaptchaEnginge(8); // Reset captcha

      } catch (error) {
        const messageContainer = document.querySelector(".message-container");
        if (messageContainer) {
          messageContainer.innerHTML =
            '<div class="alert alert-danger">Failed to send your message. Please try again later.</div>';
        }
      }
    } else {
      alert("Captcha Does Not Match");
      setUserCaptcha(""); // Reset captcha input field if validation fails
    }
  };

  // Equivalent to componentDidMount, loads captcha
  useEffect(() => {
    loadCaptchaEnginge(8); // Initialize the captcha when the component mounts
  }, []);

  const handleCaptchaChange = (event) => {
    setUserCaptcha(event.target.value); // Update captcha state
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
            <FadeInRight className="aximo-contact-thumb">
              <img src={ContactThumb} alt="Contact Thumb" />
            </FadeInRight>
          </div>
          <div className="col-lg-7">
            <div className="aximo-main-form">
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
                      defaultValue=""
                    >
                      <option value="" disabled>
                        -- Select an option --
                      </option>
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

                {/* Captcha */}
                <div className="aximo-main-field">
                  <LoadCanvasTemplate />
                </div>
                <div className="aximo-main-field">
                  <input
                    placeholder="Enter Captcha"
                    id="user_captcha_input"
                    name="user_captcha_input"
                    type="text"
                    value={userCaptcha}
                    onChange={handleCaptchaChange} // Update captcha state
                  />
                </div>

                <button id="aximo-main-btn" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
