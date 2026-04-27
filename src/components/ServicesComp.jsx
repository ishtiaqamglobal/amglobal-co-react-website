import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesComp({
  borderShow,
  headingText,
  paraText,
  servicesImg,
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="9000"
      className="servicesCompMain"
    >
      {!borderShow ? <div className="imagetopBorder"></div> : null}
      <div>
        <img
          className="zoom-effect"
          style={{ width: "100%" }}
          src={servicesImg}
          alt=""
        />
        <h1 className="servicesCompHead">{headingText}</h1>
        <p className="servicesCompPara">{paraText}</p>
      </div>
    </div>
  );
}
