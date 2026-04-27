import React, { useEffect, useState } from "react";
import NavbarNext from "../../components/NavbarNext";
import Footer from "../../components/Footer";
import "./StartAppling.css";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import secondScreenHeaderImg from "../../assests/startApplingHeaderImage.png";
import policy from "../../assests/policy.png";
import messageIcon from "../../assests/messageIcon.png";
import suitcaseImg from "../../assests/suitcaseImg.png";
import directionImage from "../../assests/directionImage.png";
import recycleImg from "../../assests/recycleImg.png";
import loadingImg from "../../assests/loadingImg.png";
import Card from "../../components/card/Card";
import Navbar from "../../components/Navbar";
import AboutUsNavbar from "../../components/AboutUsNavbar";
import { useNavigate } from "react-router-dom";
import Apply from "../../components/Vacancies/Apply";
import ApplyBackground from "../../assests/Vacancies//pattern.png";
import start_apply_bg from "../../assests/start_apply_right_bg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingSVG from "../../components/LoadingSVG";
import developer from "../../assests/Developer.jpg";
import worker from "../../assests/Worker.jpg";
import sale from "../../assests/sales.jpg";
import manufacturing from "../../assests/Manufacturing.jpg";
import finance from "../../assests/Finance.jpg";
import IT from "../../assests/IT.jpg";
import { getAllJobCategoriesCall } from "../../apis/job-categories/repo";
import { SUCCESS } from "../../utils/constants";
// import ExploreCategory from "../../components/ExploreCategory/ExploreCategory";
// import PaymentPlan from "../../components/PaymentPlan/PaymentPlan";

export default function StartAppling() {
  const navigate = useNavigate("");
  const client_names = [
    "Alice Johnson",
    "Bob Smith",
    "Catherine Lee",
    "David Martinez",
    "Eva Green",
    "Frank Wright",
    "Grace Kim",
    "Henry Clark",
    "Isabel Turner",
    "Jackie Harris",
    "Catherine Lee",
    "David Martinez",
    "Eva Green",
    "Frank Wright",
    "Grace Kim",
    "Henry Clark",
    "Isabel Turner",
    "Jackie Harris",
    "Catherine Lee",
    "David Martinez",
    "Eva Green",
    "Frank Wright",
    "Grace Kim",
    "Henry Clark",
    "Isabel Turner",
    "Jackie Harris",
    "Bob Smith",
    "Catherine Lee",
  ];
  const [state, setState] = useState({
    jobCategories: [],
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  function getCategories() {
    getAllJobCategoriesCall(1, 100)
      .then(({ data }) => {
        if (data.error_code == SUCCESS) {
          setState((prevState) => ({ ...prevState, jobCategories: data.data }));
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  return (
    <div className="bg-[#212121]">
      {/* <NavbarNext /> */}
      <AboutUsNavbar blackColor={true} />

      <div className="startApplingHeader">
        <div className="startApplingHeaderTextContainer">
          <p className="startApplingHeaderText">
            Get the Best Job <br /> <strong className="text-[#c7af4c]"> You Deserve </strong>
          </p>
          <div className="inputContainer">
            <input
              placeholder="It is up to you to choose from 4234 vacancies"
              className="inputFieldContainer"
              type="text"
            />{" "}
            <CiSearch fill="orange" size={25} style={{ cursor: "pointer" }} onClick={{}} />{" "}
          </div>
          <div
            className="buttonMainContainer border"
            onClick={() => {
              navigate("/vacancies");
            }}
          >
            <div className="buttonContainer">Start</div>
            <FaArrowRight fill="white" />
          </div>
        </div>
        <div className="startApplingHeaderImageContainer">
          {/* <img
            className="startApplingHeaderImage"
            src={secondScreenHeaderImg}
            alt=""
          /> */}
        </div>
      </div>

      <div className="cardMainContainer">
        <h3 className="text-center md:text-start text-3xl pl-0 md:pl-12  pt-10 text-white font-semibold">
          Choose Your Field
        </h3>

        {/* <div className="cardContainer flex justify-center gap-12 p-10 flex-col md:flex-row"> */}
        <div className="cardContainer flex flex-wrap justify-center gap-12 p-10">
          {state.jobCategories.map((item, index) => (
            <div className="md:w-[30%] px-4 mb-8">
              {/* <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8"> */}{" "}
              <Card
                bgImage={item.logo ? process.env.REACT_APP_URL.concat(item.logo) : worker}
                heading={item.name}
                content={item.description}
              />
            </div>
          ))}
        </div>
      </div>

      <button className="findVacBtn bg-[#B8A147]">Find Technical Vacancies</button>

      <div
        className="bg-custom-gradient-yellow  w-[65%]  md:w-1/2 registerContainerParent"
        data-aos="fade-right"
      >
        <div
          style={{
            backgroundImage: `url(${ApplyBackground})`,
            borderImage: "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
          }}
          className="registerContainer group  "
        >
          <div className="registerContainerChild">
            <h3 className="" style={{ textAlign: "left" }}>
              We find the job for you
            </h3>
            <p style={{ marginTop: "0px", color: "white", textAlign: "left" }}>
              Sign up as a job seeker and put us to work.
            </p>
            <button className="registerButton bg-[#171717]">Register Directly</button>
          </div>
        </div>
      </div>

      <h3
        className="text-white"
        style={{ margin: "40px 5px", textAlign: "center", fontSize: "25px" }}
      >
        How it Works
      </h3>

      <div className="imagesMainContainer text-white" data-aos="flip-left">
        <div className="imagesMainContainerChild">
          <div className="mainImages">
            <img style={{ width: "100%" }} src={policy} alt="" />
          </div>
          <div className="text-[7px] sm:text-sm md:text-base">Application</div>
        </div>
        <div className="joinImage hidden md:block">
          <LoadingSVG />
        </div>
        <div className="imagesMainContainerChild">
          <div className="mainImages">
            <img style={{ width: "100%" }} src={messageIcon} alt="" />
          </div>
          <div className="text-[7px] sm:text-sm md:text-base">Conversation</div>
        </div>
        <div className="joinImage hidden md:block">
          <LoadingSVG />
        </div>
        <div className="imagesMainContainerChild">
          <div className="mainImages">
            <img style={{ width: "100%" }} src={suitcaseImg} alt="" />
          </div>
          <div className="text-[7px] sm:text-sm md:text-base">Your job</div>
        </div>
        <div className="joinImage hidden md:block">
          <LoadingSVG />
        </div>
        <div className="imagesMainContainerChild">
          <div className="mainImages">
            <img style={{ width: "100%" }} src={directionImage} alt="" />
          </div>
          <div className="text-[7px] sm:text-sm md:text-base">Guidance</div>
        </div>
        <div className="joinImage hidden md:block">
          <LoadingSVG />
        </div>
        <div className="imagesMainContainerChild">
          <div className="mainImages">
            <img style={{ width: "100%" }} src={recycleImg} alt="" />
          </div>
          <div className="text-[7px] sm:text-sm md:text-base">Continued</div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="registerContainerTwo w-[65%]   md:w-1/2  bg-custom-gradient-yellow"
      >
        <div
          style={{
            backgroundImage: `url(${ApplyBackground})`,
            borderImage: "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
            width: "100%",
            height: "100%",
          }}
          className="pr-5 flex justify-center flex-col"
        >
          <div className="registerContainerChildTwo">
            <h3 style={{ textAlign: "left" }}>We find the job for you</h3>
            <p style={{ marginTop: "0px", color: "white", textAlign: "left" }}>
              Sign up as a job seeker and put us to work.
            </p>
            <button className="registerButton bg-[#171717]">Get in Touch</button>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="signUpMainContainer group border border-[#EDD569]">
        <h1 style={{ color: "white", marginTop: "0px" }} className="lg:text-3xl md:pb-5 mb-5">
          Sign Up For the Newsletter
        </h1>
        <div className="inputMainContainerChild">
          <input
            className="inputFieldSignUpContainer"
            placeholder="Enter your email address here"
            type="text"
          />
          <button className="signUpButton bg-[#212121]">Sign Up</button>
        </div>
      </div>

      <Apply />
      {/* <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        style={{
          borderImage: "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
        }}
        className="ClientMainContainer border bg-[#171717]"
      >
        <h2 className="text-xl md:text-3xl font-semibold ">Trusted Clients</h2>
        <p className="text-xs md:text-sm py-5  md:py-10 px-0 md:px-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus doloribus mollitia
          minima quam hic, at commodi cum nostrum reiciendis numquam.
        </p>
        <div className="w-full grid grid-cols-12 h-full">
          {client_names.map((value) => (
            <div
              className=" text-[9px] sm:text-sm md:text-base col-span-6 sm:col-span-4 md:col-span-3 py-2"
              key={value}
            >
              {value}
            </div>
          ))}
        </div>
      </div> */}

      <Footer />
    </div>
  );
}
