import React, { useEffect, useState } from "react";
import "./style.css";
import { CgSearch } from "react-icons/cg";
import { CgChevronDown } from "react-icons/cg";
import footerLogo from "../../assests/Vacancies/mainWallpaper.png";
import AboutUsNavbar from "../AboutUsNavbar.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("10km");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <>
      {/* <NavbarNext /> */}
      {/* <AboutUsNavbar blackColor={true} /> */}

      <div className="mainContainer">
        <img
          style={{ width: "100%", height: "90vh" }}
          src={footerLogo}
          alt="wallpaper"
        />
        <div className="mainContent">
          <div className="mainText">
          Search jobs across multiple industries
          </div>
          <form data-aos="flip-right" action="" className="mainForm">
            <input
              type="text"
              placeholder="Enter job here"
              className="mainFormInput"
            />
            <div className="mainFormDivider"></div>
            <input
              type="text"
              placeholder="Zip code or place"
              className="mainFormInput"
            />
            <div className="mainFormDivider"></div>
            <div className="mainFormDropDown">
              <div className="select" onClick={toggleDropdown}>
                <span className="selected text-[#B8A147]">
                  {selectedOption}
                </span>
                <div className="mainFormDropDownDivider"></div>
                <div className={`caret ${isOpen ? "caret-rotate" : ""}`}>
                  <CgChevronDown />
                </div>
              </div>
              {isOpen && (
                <ul className="menu menu-open">
                  {["5km", "10km"].map((option) => (
                    <li
                      key={option}
                      className={
                        option === selectedOption ? "active_vacancies" : ""
                      }
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="mainButton">
              <CgSearch
                style={{ fontWeight: "900", fontSize: "25px", color: "white" }}
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;
