import React, { useState } from "react";
import about_pattern from "../../assests/about_pattern.svg";
import "./ContactUs.css";
import { submitContactFormCall } from "../../apis/contact-form/repo";
import { SUCCESS } from "../../utils/constants";
import { isInvalidEmail, isOnlyNumber } from "../../utils/validations";
import { isNullOrEmpty } from "../../utils/text-utils";

function ContactUs() {
  const [state, setState] = useState({
    name: "",
    companyName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  function isViewValid() {
    if (!state.name) alert("Please enter first name");
    else if (!state.companyName) alert("Please enter company name");
    else if (!state.email) alert("Please enter email");
    else if (isInvalidEmail(state.email)) alert("Please enter valid email");
    else if (!state.mobile) alert("Please enter mobile number");
    else if (!state.message) alert("Please enter your query.");
    else return true;
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isViewValid()) {
      let object = {
        name: state.name,
        comapanyName: state.companyName,
        email: state.email,
        mobile: state.mobile,
        description: state.message,
      };
      setIsLoading(true);
      submitContactFormCall(object)
        .then(({ data }) => {
          setIsLoading(false);
          if (data.error_code == SUCCESS)
            setState({
              name: "",
              companyName: "",
              email: "",
              mobile: "",
              subject: "",
              message: "",
            });
          alert(data.message);
        })
        .catch((err) => {
          console.log("err", err);
          setIsLoading(false);
        });
    }
  };

  return (
    <div
      id="contact_us"
      style={{
        backgroundImage: `url(${about_pattern})`,
        backgroundSize: "cover",
      }}
      className="w-full bg-[#1E1E1E] md:py-16"
    >
      <div className="w-auto md:w-1/2 m-auto bg-[#171717]">
        <form className="form p-[18px] md:p-[50px]" onSubmit={handleSubmit}>
          <p className="title">Get in Touch</p>
          <div className="flex1">
            <label className="w-1/2">
              <input
                className="input1"
                type="text"
                name="name"
                placeholder=""
                value={state.name}
                onChange={handleChange}
                required
              />
              <span>Name</span>
            </label>

            <label className="w-1/2">
              <input
                className="input1"
                type="text"
                name="companyName"
                placeholder=""
                value={state.companyName}
                onChange={handleChange}
                required
              />
              <span>Company Name</span>
            </label>
          </div>
          <div className="flex1">
            <label className="w-1/2">
              <input
                className="input1"
                type="email"
                name="email"
                placeholder=""
                value={state.email}
                onChange={handleChange}
                required
              />
              <span>Email</span>
            </label>
            <label className="w-1/2">
              <input
                className="input1"
                type="tel"
                name="mobile"
                placeholder=""
                value={state.mobile}
                onChange={(e) => {
                  if (isOnlyNumber(e.target.value) || isNullOrEmpty(e.target.value))
                    setState((prevState) => ({ ...prevState, mobile: e.target.value }));
                }}
                required
              />
              <span>Mobile</span>
            </label>
          </div>
          <label>
            <input
              className="input1"
              type="text"
              name="subject"
              placeholder=""
              value={state.subject}
              onChange={handleChange}
              required
            />
            <span>Subject</span>
          </label>
          <label>
            <textarea
              style={{ resize: "none" }}
              className="input1"
              name="message"
              placeholder=""
              value={state.message}
              onChange={handleChange}
              required
              cols={30}
              rows={7}
            />
            <span>How can we help you</span>
          </label>
          <div className="w-full flex justify-end">
            <button className="submit" disabled={isLoading}>
              {isLoading ? "Processing..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
