import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/Logo.png";
import { FiAlignRight, FiX } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";

export default function AboutUsNavbar({ blackColor, activeAboutUs }) {
  const navigate = useNavigate("");
  const [isShow, setIsShow] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
        setToggleMenu(false);
      } else if (window.scrollY === 0) {
        setIsScrolling(false);
      }
    });
  }, []);

  const handleGetInTouch = () => {
    const getInTouchSection = document.getElementById("contact_us");
    if (getInTouchSection) {
      getInTouchSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Fade top>
        <nav
          className={
            isScrolling
              ? "NavBar_Main_Container Active_Header"
              : "NavBar_Main_Container"
          }
          style={{
            backgroundColor:
              isScrolling || blackColor ? "#171717" : "transparent",
            // backgroundColor: isScrolling ? "black" : "transparent",
          }}
        >
          <div className="navbarInnerContainer">
            <div className="navbarLogoContainer pl-5">
              <img
                className="cursor-pointer"
                src={logo}
                alt=""
                onClick={() => {
                  // scrolldiv("home", 0);
                  navigate("/");
                }}
              />
            </div>

            <div className="Navlink_Wrapper">
              <NavLink
                to="/"
                activeStyle={{
                  color: !activeAboutUs ? "#EDD569" : "",
                }}
                className={!activeAboutUs ? "Link_Style_Scroll" : "Link_Style"}
                style={({ isActive }) => {
                  return {
                    backgroundImage: isActive
                      ? "background-color: #EDD569"
                      : "",
                    color: isActive ? "white" : "white",
                    border: "none",
                    borderRadius: "60px",
                  };
                }}
              >
                Home
              </NavLink>

              <NavLink
                to="/about-us"
                activeStyle={{
                  color: activeAboutUs ? "#EDD569" : "",
                }}
                className={activeAboutUs ? "Link_Style_Scroll" : "Link_Style"}
                style={({ isActive }) => {
                  return {
                    backgroundImage: isActive
                      ? "background-color: #EDD569"
                      : "",
                    color: isActive ? "white" : "white",
                    border: "none",
                    borderRadius: "60px",
                  };
                }}
              >
                About Us
              </NavLink>

              <NavLink
                to="/"
                activeStyle={{
                  color: "#EDD569",
                }}
                className="Link_Style"
                style={({ isActive }) => {
                  return {
                    backgroundImage: isActive
                      ? "background-color: #EDD569"
                      : "",
                    color: isActive ? "white" : "white",
                    border: "none",
                    borderRadius: "60px",
                  };
                }}
              >
                Our Services
              </NavLink>

              <NavLink
                to="/"
                activeStyle={{
                  color: "#EDD569",
                }}
                className="Link_Style"
                style={({ isActive }) => {
                  return {
                    backgroundImage: isActive
                      ? "background-color: #EDD569"
                      : "",
                    color: isActive ? "white" : "white",
                    border: "none",
                    borderRadius: "60px",
                  };
                }}
              >
                Why us
              </NavLink>

              <NavLink
                to="/"
                activeStyle={{
                  color: "#EDD569",
                }}
                className="Link_Style"
                style={({ isActive }) => {
                  return {
                    backgroundImage: isActive
                      ? "background-color: #EDD569"
                      : "",
                    color: isActive ? "white" : "white",
                    border: "none",
                    borderRadius: "60px",
                  };
                }}
              >
                Industries
              </NavLink>
            </div>

            <div onClick={handleGetInTouch} className="NavbarButtonContainer">
              Contact us
            </div>

            <div className="collapse_button_number">
              <div
                onClick={handleGetInTouch}
                className="NavbarButtonContainer small_screen"
              >
                Contact us
              </div>

              <div className={"NavLink_App_Smaller_Devices"}>
                {toggleMenu ? (
                  <div className="Toggle_Btn_CLose">
                    <FiX
                      color="white"
                      size={30}
                      onClick={() => setToggleMenu(false)}
                    />
                  </div>
                ) : (
                  <div className="Toggle_Btn_Open">
                    <FiAlignRight
                      color="white"
                      size={30}
                      onClick={() => setToggleMenu(true)}
                    />
                  </div>
                )}

                {toggleMenu ? (
                  <div className={"NavLink_App_Smaller_Overlay"}>
                    <div
                      className={"Navlink_App_Links_Wrapper_SmallScreen_links"}
                    >
                      <NavLink
                        to="/"
                        activeStyle={{
                          color: !activeAboutUs ? "#EDD569" : "",
                        }}
                        className={
                          !activeAboutUs ? "Link_Style_Scroll" : "Link_Style"
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundImage: isActive
                              ? "background-color: #EDD569"
                              : "",
                            color: isActive ? "white" : "white",
                            border: "none",
                            borderRadius: "60px",
                          };
                        }}
                      >
                        Home
                      </NavLink>

                      <NavLink
                        to="/about-us"
                        activeStyle={{
                          color: activeAboutUs ? "#EDD569" : "",
                        }}
                        className={
                          activeAboutUs ? "Link_Style_Scroll" : "Link_Style"
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundImage: isActive
                              ? "background-color: #EDD569"
                              : "",
                            color: isActive ? "white" : "white",
                            border: "none",
                            borderRadius: "60px",
                          };
                        }}
                      >
                        About Us
                      </NavLink>

                      <NavLink
                        to="/"
                        activeStyle={{
                          color: "#EDD569",
                        }}
                        className="Link_Style"
                        style={({ isActive }) => {
                          return {
                            backgroundImage: isActive
                              ? "background-color: #EDD569"
                              : "",
                            color: isActive ? "white" : "white",
                            border: "none",
                            borderRadius: "60px",
                          };
                        }}
                      >
                        Our Services
                      </NavLink>

                      <NavLink
                        to="/"
                        activeStyle={{
                          color: "#EDD569",
                        }}
                        className="Link_Style"
                        style={({ isActive }) => {
                          return {
                            backgroundImage: isActive
                              ? "background-color: #EDD569"
                              : "",
                            color: isActive ? "white" : "white",
                            border: "none",
                            borderRadius: "60px",
                          };
                        }}
                      >
                        Why us
                      </NavLink>

                      <NavLink
                        to="/"
                        activeStyle={{
                          color: "#EDD569",
                        }}
                        className="Link_Style"
                        style={({ isActive }) => {
                          return {
                            backgroundImage: isActive
                              ? "background-color: #EDD569"
                              : "",
                            color: isActive ? "white" : "white",
                            border: "none",
                            borderRadius: "60px",
                          };
                        }}
                      >
                        Industries
                      </NavLink>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </nav>
      </Fade>
    </>
  );
}
