import React, { useState, useEffect } from "react";
import chooseUsImg from "../assests/chooseUsImg.png";
import choseUsBgImg from "../assests/choseUsBgImg.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ChooseUs() {
  const [isOpen, setisOpen] = useState(true);
  const [isOpen1, setisOpen1] = useState(false);
  const [isOpen2, setisOpen2] = useState(false);
  const [isOpen3, setisOpen3] = useState(false);
  const [isOpen4, setisOpen4] = useState(false);
  const [isOpen5, setisOpen5] = useState(false);
  const [isOpen6, setisOpen6] = useState(false);

  function plus() {
    setisOpen(true);
    setisOpen1(false);
    setisOpen2(false);
    setisOpen3(false);
    setisOpen4(false);
    setisOpen5(false);
    setisOpen6(false);
  }
  function plus1() {
    setisOpen1(true);
    setisOpen(false);
    setisOpen2(false);
    setisOpen3(false);
    setisOpen4(false);
    setisOpen5(false);
    setisOpen6(false);
  }
  function plus2() {
    setisOpen2(true);
    setisOpen(false);
    setisOpen1(false);
    setisOpen3(false);
    setisOpen4(false);
    setisOpen5(false);
    setisOpen6(false);
  }
  function plus3() {
    setisOpen2(false);
    setisOpen(false);
    setisOpen1(false);
    setisOpen3(true);
    setisOpen4(false);
    setisOpen5(false);
    setisOpen6(false);
  }
  function plus4() {
    setisOpen2(false);
    setisOpen(false);
    setisOpen1(false);
    setisOpen3(false);
    setisOpen4(true);
    setisOpen5(false);
    setisOpen6(false);
  }
  function plus5() {
    setisOpen2(false);
    setisOpen(false);
    setisOpen1(false);
    setisOpen3(false);
    setisOpen4(false);
    setisOpen5(true);
    setisOpen6(false);
  }
  function plus6() {
    setisOpen2(false);
    setisOpen(false);
    setisOpen1(false);
    setisOpen3(false);
    setisOpen4(false);
    setisOpen5(false);
    setisOpen6(true);
  }

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
    <div className="chooseUsMain" id="why__us">
      <div className="chooseUsMainContainer">
        <div data-aos="fade-down-right" className="chooseUsMainContainerChild1">
          <h1 className="chooseUsMainContainerChild1Head">
            Why <span style={{ backgroundColor: "#EDD569" }}>Choose</span> us?
          </h1>
          <p className="chooseUsMainContainerChild1Para">
            AM Global has a proven track record of providing high-quality HR
            outsourcing and manpower supply solutions to businesses of all
            sizes. We are the leading provider of HR outsourcing services in the
            UAE and provide top-notch Manpower Supply, HR Outsourcing, and
            Recruitment Services to our clients.
            <br />
            <br />
            <span className="paraInnerSpan">
              Let our experts help you find the right solution for your business
              needs today!
            </span>
            <br />
            <br />
            AM Global is one of the top outsourcing agencies that offer
            cutting-edge solutions for all your HR requirements. AM Global covers the entire seven emirates with the intention of expansion to the GCC. We have experienced work force deployed across various industry
            segments and an employee pool with a mix of nationalities. By
            providing exemplary services we aim to focus on providing value to
            both to our clients and employees. This has helped us gain and
            maintain good business relationship with our existing clients and we
            hope to continue doing so in the future.
          </p>
          <button
            onClick={handleGetInTouch}
            className="chooseUsMainContainerChild1Button"
          >
            Learn more
          </button>
        </div>
        <div data-aos="fade-down-left" className="chooseUsMainContainerChild2">
          <img
            className="zoom-effect"
            style={{ width: "100%" }}
            src={chooseUsImg}
            alt=""
          />
        </div>
      </div>

      <div className="choseUsBgImgContainer">
        <img style={{ width: "100%" }} src={choseUsBgImg} alt="" />
      </div>

      <div data-aos="fade-up">
        <h1 className="industriesHead">
          <span style={{ backgroundColor: "#EDD569", zIndex: "10" }}>
            INDUSTRIES
          </span>{" "}
          WE ARE SERVING
        </h1>

        <div data-aos="fade-left" className="chooseUsSecondContainer">
          <div
            className={
              isOpen
                ? "chooseUsSecondContainer1Active"
                : "chooseUsSecondContainer1"
            }
            onClick={plus}
          >
            <p
              className={
                isOpen
                  ? "chooseUsSecondContainer1Text"
                  : "chooseUsSecondContainerText"
              }
            >
              AUTOMATION
            </p>
          </div>
          <div
            className={
              isOpen1
                ? "chooseUsSecondContainer2Active"
                : "chooseUsSecondContainer2"
            }
            onClick={plus1}
          >
            <p
              className={
                isOpen1
                  ? "chooseUsSecondContainer1Text"
                  : "chooseUsSecondContainerText"
              }
            >
              AVIATION
            </p>
          </div>
          <div
            className={
              isOpen2
                ? "chooseUsSecondContainer3Active"
                : "chooseUsSecondContainer3"
            }
            onClick={plus2}
          >
            <p
              className={
                isOpen2
                  ? "chooseUsSecondContainer1Text"
                  : "chooseUsSecondContainerText"
              }
            >
              FINANCE & BANKING
            </p>
          </div>
          <div
            className={
              isOpen3
                ? "chooseUsSecondContainer4Active"
                : "chooseUsSecondContainer4"
            }
            onClick={plus3}
          >
            <p
              className={
                isOpen3
                  ? "chooseUsSecondContainer1Text"
                  : "chooseUsSecondContainerText"
              }
            >
              FOOD INDUSTRY
            </p>
          </div>
          <div
            className={
              isOpen4
                ? "chooseUsSecondContainer5Active"
                : "chooseUsSecondContainer5"
            }
            onClick={plus4}
          >
            <p
              className={
                isOpen4
                  ? "chooseUsSecondContainer1Text"
                  : "chooseUsSecondContainerText"
              }
            >
              MARINE & SHIPPING
            </p>
          </div>
          <div
            className={
              isOpen5
                ? "chooseUsSecondContainer6Active"
                : "chooseUsSecondContainer6"
            }
            onClick={plus5}
          >
            <p
              className={
                isOpen5
                  ? "chooseUsSecondContainer1Text"
                  : "chooseUsSecondContainerText"
              }
            >
              OIL & GAS/ENERGY
            </p>
          </div>
          <div
            className={
              isOpen6
                ? "chooseUsSecondContainer7Active"
                : "chooseUsSecondContainer7"
            }
            onClick={plus6}
          >
            <p
              className={
                isOpen6
                  ? "chooseUsSecondContainer1Text"
                  : "chooseUsSecondContainerText"
              }
            >
              TECHNOLOGY & IT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
