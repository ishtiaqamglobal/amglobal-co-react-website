import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.svg";
import { FiAlignRight, FiX } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import { TfiEmail } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function NavbarNext({ bgimg }) {
  const [isShow, setIsShow] = useState(false);

  function hamburger() {
    setIsShow(!isShow);
    // window.alert("Hamburger is clicked");
  }

  const [isScrolling, setIsScrolling] = useState(false);
  const [isActive, setIsActive] = useState("home");
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
  });

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const scrollPosition = window.scrollY;
  //       const sectionOffsets = {
  //         home: document.getElementById("home").offsetTop,
  //         about__Us: document.getElementById("about__Us").offsetTop,
  //         our__services: document.getElementById("our__services").offsetTop,
  //         why__us: document.getElementById("why__us").offsetTop,
  //         industries: document.getElementById("industries").offsetTop,
  //         // consulting: document.getElementById("consulting").offsetTop,
  //         // contact__us: document.getElementById("contact__us").offsetTop,
  //       };
  //       let activeSection = "";

  //       Object.entries(sectionOffsets).forEach(([sectionId, offset]) => {
  //         if (scrollPosition >= offset - window.innerHeight / 3) {
  //           activeSection = sectionId;
  //         }
  //       });

  //       setIsActive(activeSection);
  //       setIsScrolling(scrollPosition > 0);

  //       setToggleMenu(false);
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);
  //   function scrolldiv(scroll, offset) {
  //     var elem = document.getElementById(scroll);
  //     if (elem) {
  //       window.scrollTo({
  //         top: elem.offsetTop - offset,
  //         behavior: "smooth",
  //       });
  //     }
  //   }

  //   window.onload = function () {
  //     var isRefreshed =
  //       performance &&
  //       performance.navigation &&
  //       performance.navigation.type === performance.navigation.TYPE_RELOAD;

  //     if (isRefreshed) {
  //       scrolldiv("home", 0);
  //     } else {
  //       scrolldiv("home", 0);
  //     }
  //   };

  //   const handleGetInTouch = () => {
  //     const getInTouchSection = document.getElementById("industries");
  //     if (getInTouchSection) {
  //       const topOffset = getInTouchSection.offsetTop + 850;
  //       window.scrollTo({
  //         top: topOffset,
  //         behavior: "smooth",
  //       });
  //     }
  //   };

  return (
    <>
      <Fade top>
        <nav
          className={
            isScrolling
              ? "NavBar_Main_Container Active_Header "
              : "NavBar_Main_Container"
          }
          style={{
            backgroundColor: isScrolling ? "rgba(0, 0, 0, 0.5)" : "transparent",
          }}
        >
          <div className="navbarInnerContainer">
            <div className="navbarLogoContainer w-14">
              <img
                className="w-full"
                src={logo}
                alt=""
                // onClick={() => {
                //   scrolldiv("home", 0);
                // }}
              />
            </div>

            <div className="Navlink_Wrapper_Second">
              <NavLink
                to="/vacancies"
                // onClick={() => {
                //   scrolldiv("home", 0);
                // }}
                activeStyle={{
                  color: isActive === "home" ? " #EDD569" : "",
                }}
                className={
                  isActive === "home" ? "Link_Style_Scroll" : "Link_Style"
                }
                style={({ isActive }) => {
                  return {
                    backgroundImage: isActive
                      ? "background-color: #EDD569"
                      : "",
                    // color: isActive ? "white" : "#266A86",
                    color: "white",
                    border: "none",
                    borderRadius: "60px",
                  };
                }}
              >
                Vacancies
              </NavLink>

              {/* <NavLink
                to="#about__Us"
                activeStyle={{
                  color: isActive === "aboutUs" ? " #EDD569" : "",
                }}
                className={
                  isActive === "about__Us" ? "Link_Style_Scroll" : "Link_Style"
                }
                onClick={() => {
                  // setIsActive("about__Us");
                  scrolldiv("about__Us", 90);
                }}
                style={({ isActive }) => {
                  return {
                    backgroundImage: isActive
                      ? "background-color: #EDD569"
                      : "",
                    color: isActive ? "white" : "#266A86",
                    border: "none",
                    borderRadius: "60px",
                  };
                }}
              >
                About Us
              </NavLink>

              <NavLink
                to="#our__services"
                activeStyle={{
                  color: isActive === "our__services" ? " #EDD569" : "",
                }}
                className={
                  isActive === "our__services"
                    ? "Link_Style_Scroll"
                    : "Link_Style"
                }
                onClick={() => {
                  // setIsActive("mission__vision");
                  scrolldiv("our__services", 90);
                }}
                style={({ isActive }) => {
                  return {
                    backgroundImage: isActive
                      ? "background-color: #EDD569"
                      : "",
                    color: isActive ? "white" : "#266A86",
                    border: "none",
                    borderRadius: "60px",
                  };
                }}
              >
                Our Services
              </NavLink>

              <NavLink
                to="#why__us"
                activeStyle={{
                  color: isActive === "why__us" ? " #EDD569" : "",
                }}
                className={
                  isActive === "why__us" ? "Link_Style_Scroll" : "Link_Style"
                }
                onClick={() => {
                  // setIsActive("distribution");
                  scrolldiv("why__us", 90);
                }}
                style={({ isActive }) => {
                  return {
                    backgroundImage: isActive
                      ? "background-color: #EDD569"
                      : "",
                    color: isActive ? "white" : "#266A86",
                    border: "none",
                    borderRadius: "60px",
                  };
                }}
              >
                Why us
              </NavLink>
              <NavLink
                to="#industries"
                activeStyle={{
                  color: isActive === "industries" ? "#EDD569" : "",
                }}
                className={
                  isActive === "industries" ? "Link_Style_Scroll" : "Link_Style"
                }
                onClick={() => {
                  // setIsActive("logistics");
                  scrolldiv("industries", 90); // Adjust the offset as per your requirement
                }}
                style={({ isActive }) => {
                  return {
                    backgroundImage: isActive
                      ? "background-color: #EDD569"
                      : "",
                    color: isActive ? "white" : "#266A86",
                    border: "none",
                    borderRadius: "60px",
                  };
                }}
              >
                Industries
              </NavLink> */}
            </div>

            {/* <div onClick={handleGetInTouch} className="NavbarButtonContainer">
              Contact us
            </div>  */}

            {/* <div className="collapse_button_number">
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
                        to="#home"
                        onClick={() => {
                          // setIsActive("home");
                          scrolldiv("home", 0);
                        }}
                        activeStyle={{
                          color: isActive === "home" ? " #EDD569" : "",
                        }}
                        className={
                          isActive === "home"
                            ? "Link_Style_Scroll"
                            : "Link_Style"
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundImage: isActive
                              ? "background-color: #EDD569"
                              : "",
                            color: isActive ? "266A86" : "",
                            border: "none",
                            borderRadius: "60px",
                          };
                        }}
                      >
                        Home
                      </NavLink>

                      <NavLink
                        to="#aboutUs"
                        activeStyle={{
                          color: isActive === "aboutUs" ? " #EDD569" : "",
                        }}
                        className={
                          isActive === "about__Us"
                            ? "Link_Style_Scroll"
                            : "Link_Style"
                        }
                        onClick={() => {
                          // setIsActive("about__Us");
                          if (
                            window.innerWidth > 768 &&
                            window.innerWidth < 1025
                          ) {
                            scrolldiv("about__Us", 90);
                          } else {
                            scrolldiv("about__Us", 70);
                          }
                        }}
                        style={({ isActive }) => {
                          return {
                            backgroundImage: isActive
                              ? "background-color: #EDD569"
                              : "",
                            color: isActive ? "266A86" : "",
                            border: "none",
                            borderRadius: "60px",
                          };
                        }}
                      >
                        About Us
                      </NavLink>

                      <NavLink
                        to="#our__services"
                        activeStyle={{
                          color: isActive === "our__services" ? " #EDD569" : "",
                        }}
                        className={
                          isActive === "our__services"
                            ? "Link_Style_Scroll"
                            : "Link_Style"
                        }
                        onClick={() => {
                          // setIsActive("mission__vision");
                          if (
                            window.innerWidth > 768 &&
                            window.innerWidth < 1025
                          ) {
                            scrolldiv("our__services", 90);
                          } else {
                            scrolldiv("our__services", 70);
                          }
                        }}
                        style={({ isActive }) => {
                          return {
                            backgroundImage: isActive
                              ? "background-color: #EDD569"
                              : "",
                            color: isActive ? "266A86" : "",
                            border: "none",
                            borderRadius: "60px",
                          };
                        }}
                      >
                        Our Services
                      </NavLink>

                      <NavLink
                        to="#why__us"
                        activeStyle={{
                          color: isActive === "why__us" ? " #EDD569" : "",
                        }}
                        className={
                          isActive === "why__us"
                            ? "Link_Style_Scroll"
                            : "Link_Style"
                        }
                        onClick={() => {
                          // setIsActive("distribution");
                          if (
                            window.innerWidth > 768 &&
                            window.innerWidth < 1025
                          ) {
                            scrolldiv("why__us", 90);
                          } else {
                            scrolldiv("why__us", 70);
                          }
                        }}
                        style={({ isActive }) => {
                          return {
                            backgroundImage: isActive
                              ? "background-color: #EDD569"
                              : "",
                            color: isActive ? "266A86" : "",
                            border: "none",
                            borderRadius: "60px",
                          };
                        }}
                      >
                        Why us
                      </NavLink>
                      <NavLink
                        to="#industries"
                        activeStyle={{
                          color: isActive === "industries" ? "#EDD569" : "",
                        }}
                        className={
                          isActive === "industries"
                            ? "Link_Style_Scroll"
                            : "Link_Style"
                        }
                        onClick={() => {
                          // setIsActive("logistics");
                          if (
                            window.innerWidth > 768 &&
                            window.innerWidth < 1025
                          ) {
                            scrolldiv("industries", 90);
                          } else {
                            scrolldiv("industries", 70);
                          }
                        }}
                        style={({ isActive }) => {
                          return {
                            backgroundImage: isActive
                              ? "background-color: #EDD569"
                              : "",
                            color: isActive ? "266A86" : "black",
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
            </div> */}
          </div>
        </nav>
      </Fade>
    </>
  );
}
