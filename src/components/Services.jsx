import React, { useEffect } from "react";
import ServicesComp from "./ServicesComp";
import servicesImg1 from "../assests/servicesImg1.svg";
import servicesImg2 from "../assests/servicesImg2.svg";
import servicesImg3 from "../assests/servicesImg3.svg";
import servicesImg4 from "../assests/servicesImg4.svg";
import servicesImg5 from "../assests/servicesImg5.svg";
import servicesImg6 from "../assests/servicesImg6.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="servicesMain" id="our__services">
      <div className="servicesMainContainer">
        <div className="servicesMainContainerHead">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="servicesMainContainerHeadingDiv"
          >
            <h1 className="servicesMainContainerHeading">Our Services</h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="servicesMainContainerParaDiv"
          >
            <p className="servicesMainContainerPara">
              Concise talent management solutions that matches with a particular
              industry, geography, or business requirement.
            </p>
          </div>
        </div>

        <div className="servicesMainSection">
          <div className="servicesMainSectionChild1">
            <ServicesComp
              right
              borderShow
              servicesImg={servicesImg1}
              headingText="Manpower Supply"
              paraText="We provide a comprehensive range of manpower solutions to help businesses stay staffed and productive."
            />
            <ServicesComp
              right
              servicesImg={servicesImg2}
              headingText="HR Outsourcing"
              paraText="Our team of HR professionals can take on all your HR needs, from payroll to benefits administration."
            />
            <ServicesComp
              right
              servicesImg={servicesImg3}
              headingText="IT Staffing"
              paraText="Our highly efficient & experienced team provides IT Staffing solutions to companies across Gulf countries, India, Pakistan and USA. Our IT Staff Augmentation team has successfully delivered both short-term and long-term solutions as well as project-based deployment and we provide our customers a concise talent management solutions that matches with a particular industry, geography, or business requirement."
            />
          </div>
          <div className="servicesMainSectionChild2">
            <ServicesComp
              borderShow
              servicesImg={servicesImg4}
              headingText="PEO Services"
              paraText="Our PEO services can help businesses save time and money while reducing compliance risks.
"
            />
            <ServicesComp
              servicesImg={servicesImg5}
              headingText="Recruitment Services"
              paraText="Let our experts help you find the best talent for your open positions to keep your business moving forward."
            />
            <ServicesComp
              servicesImg={servicesImg6}
              headingText="Payroll Services"
              paraText="Managing payroll, accounting, and all other financial responsibilities in house and at once is time-consuming and prone to errors. We work in partnership with our clients to develop, implement and manage bespoke payroll services. Our services are in line with the WPS and our clients enjoy considerable cost savings and can focus on core activities of the business."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
