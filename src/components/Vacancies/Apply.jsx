import React, { useEffect } from "react";
import ApplyBackground from "../../assests/Vacancies//pattern.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Apply() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);
  return (
    <div
      className="apply"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div
        style={{ backgroundImage: `url(${ApplyBackground})` }}
        className="mainApply"
      >
        <div className="hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 767.81 767.811"
            width="600px"
            style={{
              position: "absolute",
              left: "-320px",
              top: "-140px",
              zindex: "2",
            }}
          >
            <g
              id="Rectangle_768"
              data-name="Rectangle 768"
              transform="translate(767.81 383.905) rotate(135)"
              fill="none"
              stroke="#171717"
              stroke-width="50"
            >
              <rect
                width="242.924"
                height="222.924"
                rx="40"
                stroke="none"
              ></rect>
              <rect
                x="60"
                y="60"
                width="322.924"
                height="322.924"
                rx="20"
                fill="#B8A147"
              ></rect>
            </g>
          </svg>
        </div>
        <div>
          {/* <img src={ApplyBackground} style={{height:'60vh', width:'100%'}} alt="" /> */}
          <div className="applyContent">
            <div className="heading">Find Your Dream Job with Us</div>
            <div>
              Discover thousands of job opportunities across various industries.
              Our platform connects you with top employers, making your job
              search easier and more efficient. We offer an extensive range of
              job listings from reputable companies, and our user-friendly
              search function allows you to easily filter and find jobs based on
              your preferences. Submit your application directly through our
              platform with just a few clicks. Take the first step towards your
              new career today.
            </div>
            <div>
              <button className="classButton">Apply Directly</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apply;
