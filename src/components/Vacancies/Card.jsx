import React, { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaCertificate } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoMdClock } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Card({ item, key, name, location, job_type, min_salary, max_salary, experience }) {
  const navigate = useNavigate();
  // useEffect(() => {
  //   AOS.init({
  //     duration: 500,
  //     easing: "ease",
  //     delay: 100,
  //   });
  // }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <div key={key} data-aos="flip-down" className="Card border border-[#EDD569]">
      <div className="CardHeading">{name}</div>
      <div className="CardSection">
        <div className="CardDetail">
          <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <PiSuitcaseSimpleBold className="CardIcons" /> {job_type}
          </p>
          <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <FaMapMarkerAlt className="CardIcons" /> {location}
          </p>
          <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <IoMdClock className="CardIcons" /> {experience}
          </p>
          <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <HiCurrencyDollar className="CardIcons" />
            {`${formatCurrency(min_salary ? min_salary : 0)} - ${formatCurrency(
              max_salary ? max_salary : 0
            )}`}
          </p>
        </div>
        <div className="ButtonGroup">
          {/* <button className="CardButton_1">More Info</button> */}
          <button
            className="CardButton_2"
            onClick={() => {
              navigate("/apply-directly", { state: item._id });
            }}
          >
            Apply Directly
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
