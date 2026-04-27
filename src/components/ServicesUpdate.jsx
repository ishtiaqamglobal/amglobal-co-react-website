import React from "react";
import ourServicesTopBgImgPng from "../assests/ourServicesTopBgImgPng.png";
import ServicesCompUpdate from "./ServicesCompUpdate";
import serviceCompImg1 from "../assests/serviceCompImg1.png";
import serviceCompImg2 from "../assests/serviceCompImg2.png";
import serviceCompImg3 from "../assests/serviceCompImg3.png";
import serviceCompImg4 from "../assests/serviceCompImg4.png";
import serviceCompImg5 from "../assests/serviceCompImg5.png";
import serviceCompImg6 from "../assests/serviceCompImg6.png";
import groupTopLineImg from "../assests/groupTopLineImg.svg";
import groupBottomLineImg from "../assests/groupBottomLineImg.svg";

export default function ServicesUpdate() {
  return (
    <div className="servicesMain" id="our__services">
      <div className="servicesHeadContainer">
        {/* <img
          style={{ width: "100%", objectFit: "cover" }}
          src={ourServicesTopBgImg}
          alt=""
        /> */}
        <div className="servicesHeadings">
          <h1 className="servicesHeadingText">Our Services</h1>
          <p className="servicesParaText">
            Concise talent management solutions that matches with a particular
            industry, geography, or business requirement.
          </p>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <ServicesCompUpdate
          serviceCompImg={serviceCompImg1}
          serviceCompText="Manpower Supply"
          serviceCompPara="We provide a comprehensive range of manpower solutions to help businesses stay staffed and productive."
        />

        <div className="serviceBgGroupImg">
          {/* <img style={{ width: "100%" }} src={groupBottomLineImg} alt="" /> */}
        </div>
      </div>

      <ServicesCompUpdate
        reverse
        serviceCompImg={serviceCompImg2}
        serviceCompText="PEO Services"
        serviceCompPara="Our PEO services can help businesses save time and money while reducing compliance risks."
      />
      <div style={{ position: "relative" }}>
        <div className="serviceBgGroupImg1">
          {/* <img style={{ width: "100%" }} src={groupTopLineImg} alt="" /> */}
        </div>
        <ServicesCompUpdate
          serviceCompImg={serviceCompImg3}
          serviceCompText="HR Outsourcing"
          serviceCompPara="Our team of HR professionals can take on all your HR needs, from payroll to benefits administration."
        />
        <div className="serviceBgGroupImg">
          {/* <img style={{ width: "100%" }} src={groupBottomLineImg} alt="" /> */}
        </div>
      </div>
      <ServicesCompUpdate
        reverse
        serviceCompImg={serviceCompImg4}
        serviceCompText="Recruitment Services"
        serviceCompPara="Let our experts assist you in finding the best talent for your open positions to help flourish your business."
      />

      <div style={{ position: "relative" }}>
        <div className="serviceBgGroupImg1">
          {/* <img style={{ width: "100%" }} src={groupTopLineImg} alt="" /> */}
        </div>

        <ServicesCompUpdate
          serviceCompImg={serviceCompImg5}
          serviceCompText="IT Staffing "
          serviceCompPara="Our highly efficient & experienced team provides IT Staffing solutions to companies across Gulf countries, India, Pakistan and USA. Our IT Staff Augmentation team has successfully delivered both short-term and long-term solutions as well as project-based deployment and and we provide our customers , an accurate and concise talent management solutions that match with a particular industry, geography, or business requirement."
        />
        <div className="serviceBgGroupImg">
          {/* <img style={{ width: "100%" }} src={groupBottomLineImg} alt="" /> */}
        </div>
      </div>

      <ServicesCompUpdate
        reverse
        serviceCompImg={serviceCompImg6}
        serviceCompText="Payroll Services"
        serviceCompPara="Managing payroll, accounting, and all other financial responsibilities in house and at once is time-consuming and prone to errors. We work in partnership with our clients to develop, implement and manage bespoke payroll services. Our services are in line with the WPS and our clients enjoy considerable cost savings and can focus on core activities of the business."
      />
    </div>
  );
}
