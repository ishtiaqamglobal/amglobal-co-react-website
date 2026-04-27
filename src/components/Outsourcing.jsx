import React, { useEffect } from "react";
import firstSectionImg2 from "../assests/firstSectionImg2.svg";
import starImage from "../assests/starImage.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import outsourcingImg from '../assests/secondSectionBgImg.jpg'
export default function Outsourcing() {
  const handleGetInTouch = () => {
    const getInTouchSection = document.getElementById("industries");
    if (getInTouchSection) {
      const topOffset = getInTouchSection.offsetTop - 90;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);
  return (
    <div className="outsourcingMain" id="about__Us">
      <div className="firstSection">
        <div className="firstSectionContainer">
          <div data-aos="fade-down-right" className="firstSectionChild1">
            <h1 className="firstSectionChild1Head">
              Outsourcing your HR needs has never been easier!
            </h1>
            <p className="firstSectionChild1Para">
              AM Global is the leading provider of HR outsourcing services, and
              we provide a comprehensive suite of services that allow businesses
              to focus on their core competencies and leave the HR functions to
              us.
            </p>
            <button
              onClick={handleGetInTouch}
              className="firstSectionChild1Button"
            >
              Learn more
            </button>
          </div>
          <div data-aos="fade-down-left" className="firstSectionChild2">
            <img
              className="zoom-effect"
              style={{ width: "100%" }}
              src={firstSectionImg2}
              alt=""
            />
          </div>

          <div className="starImageContainer">
            <img style={{ width: "100%" }} src={starImage} alt="" />
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="firstSectionContainerTwo">
            <h1 className="firstSectionContainerTwoHead">
              HR Outsourcing & Manpower Supply Solutions Diverse Capabilities
            </h1>
            <p className="firstSectionContainerTwoPara  py-5 md:py-8 lg:py-3">
              With AM Global you can outsource your entire HR function or any
              specific HR services that you may need. We will work with you to
              develop a customized solution that meets your specific business
              needs with ease.
            </p>
          </div>
          <div className="outsourchingButtonContainer">
            <div className="outsourchingButton1">
              Efficient & Cost-Effective
            </div>
            <div className="outsourchingButton">
              Comprehensive Suite of Services
            </div>
            <div className="outsourchingButton">
              Experienced & Professional Team
            </div>
            <div className="outsourchingButton">
              Streamlined & Customized Solutions
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="secondSection">
          <img src={outsourcingImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
