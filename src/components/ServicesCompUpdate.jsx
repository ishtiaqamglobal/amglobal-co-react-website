import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesCompUpdate({
  serviceCompText,
  serviceCompPara,
  serviceCompImg,
  reverse,
}) {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className={reverse ? "servicesCompUpdateMain1" : "servicesCompUpdateMain"}
    >
      <div data-aos="fade-up-right" className="servicesCompUpdateChild1">
        <img style={{ width: "100%" }} src={serviceCompImg} alt="" />
      </div>
      <div data-aos="fade-up-left" className="servicesCompUpdateChild2">
        {" "}
        <h1 className="servicesCompUpdateChildHead">{serviceCompText}</h1>
        <p className="servicesCompUpdateChildPara">{serviceCompPara}</p>
      </div>
    </div>
  );
}
