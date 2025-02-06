import React, { useRef, useState } from "react";
import ReactSlider from "react-slider";
import emailjs from "emailjs-com";

function ContactHomeOne({ className }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const formRef = useRef(null);
  const [panels, setPanels] = useState(35);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const validateForm = () => {
    let newErrors = {};

    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required";
    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoading(true);
    const templateParams = {
      ...formData,
      panels,
    };
    emailjs
      .send(
        "service_c5foyz7",
        "template_ox1in08",
        templateParams,
        "gUFpv_2Wpt3d4QGH5"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setLoading(false);
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setPanels(0);
          setErrors({});
        },
        (error) => {
          setLoading(false);
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          console.error("Error sending email:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <>
      <section className={`faq-section pt-0 ${className || ""}`}>
        <div className="anim-icons">
          <div className="icon-bulb-2 bounce-y"></div>
          <div className="icon-solar-6"></div>
        </div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row g-0">
              <div className="faq-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                <div className="inner-column">
                  <div className="icon-dots"></div>
                  <div className="sec-title">
                    <div className="sub-title-outer">
                      <span className="sub-title">Faq's</span>
                      <span className="divider"></span>
                    </div>
                    <h2 className="letters-slide-up text-split">
                      Asked Questions
                    </h2>
                  </div>

                  <ul className="accordion-box">
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 1 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleClick(1)}
                      >
                        What is solar system ?
                        <i className="icon fal fa-plus"></i>
                      </div>
                      <div
                        className={
                          isActive.key == 1
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            With over four decades of experience providing{" "}
                            <br /> solutions to large-scale enterprises
                            throughout the globe.
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 2 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleClick(2)}
                      >
                        Can i get refund ?<i className="icon fal fa-plus"></i>
                      </div>
                      <div
                        className={
                          isActive.key == 2
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            With over four decades of experience providing{" "}
                            <br /> solutions to large-scale enterprises
                            throughout the globe.
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 3 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleClick(3)}
                      >
                        Whic solar is best ?<i className="icon fal fa-plus"></i>
                      </div>
                      <div
                        className={
                          isActive.key == 3
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            With over four decades of experience providing{" "}
                            <br /> solutions to large-scale enterprises
                            throughout the globe.
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 4 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleClick(4)}
                      >
                        Duration of installation time ?
                        <i className="icon fal fa-plus"></i>
                      </div>
                      <div
                        className={
                          isActive.key == 4
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            With over four decades of experience providing{" "}
                            <br /> solutions to large-scale enterprises
                            throughout the globe.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="form-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="bg bg-image"
                  style={{
                    backgroundImage:
                      "url(../../assets/images/background/5.jpg)",
                  }}
                ></div>
                <div className="inner-column">
                  <div
                    className="contact-form bgPrimary style-two wow fadeIn"
                    data-wow-delay="300ms"
                  >
                    <form ref={formRef} onSubmit={sendEmail} id="contact-form">
                      <h3 className="title text-center">Request A Quote</h3>
                      <div className="row">
                        {/* First Name */}
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            value={formData.first_name}
                            onChange={handleChange}
                          />
                          {errors.first_name && (
                            <span className="error-text">
                              {errors.first_name}
                            </span>
                          )}
                        </div>

                        {/* Last Name */}
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            value={formData.last_name}
                            onChange={handleChange}
                          />
                          {errors.last_name && (
                            <span className="error-text">
                              {errors.last_name}
                            </span>
                          )}
                        </div>

                        {/* Email */}
                        <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <span className="error-text">{errors.email}</span>
                          )}
                        </div>

                        {/* Phone */}
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          {errors.phone && (
                            <span className="error-text">{errors.phone}</span>
                          )}
                        </div>

                        {/* Subject */}
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                          {errors.subject && (
                            <span className="error-text">{errors.subject}</span>
                          )}
                        </div>

                        {/* Slider */}
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <label className="range-title">
                            Number of Panels:
                          </label>
                          <div className="range-slider-one mt-3">
                            <ReactSlider
                              className="horizontal-slider form-group mb-4"
                              thumbClassName="example-thumb"
                              trackClassName="example-track"
                              min={0}
                              max={100}
                              defaultValue={0}
                              value={panels}
                              onChange={(value) => setPanels(value)}
                              renderThumb={(props, state) => (
                                <span {...props}>{state.valueNow}</span>
                              )}
                              pearling
                              minDistance={1}
                            />
                          </div>
                        </div>

                        {/* Message */}
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                          {errors.message && (
                            <span className="error-text">{errors.message}</span>
                          )}
                        </div>

                        {/* Submit Button */}
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <button
                            className="theme-btn btn-style-two dark-bg hover-one"
                            type="submit"
                          >
                            <span className="btn-title">
                              {loading ? "Sending... " : "Submit Request "}
                              <i className="icon icon-sm-arrow"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactHomeOne;
