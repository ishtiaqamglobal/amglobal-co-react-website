import React, { useEffect, useState } from "react";
import applyHeaderBg from "../../assests/applyDirectlyHeaderImg.png";
import applyProfile from "../../assests/applyDirectlyProfileImg.png";
import applyDirectlyBgImg from "../../assests/applyDirectlyBgImg.png";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp, IoMdClock } from "react-icons/io";
import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlus,
  FaCertificate,
  FaUser,
} from "react-icons/fa";
import Card from "../../components/card/Card";
import Footer from "../../components/Footer";
import developer from "../../assests/Developer.jpg";
import worker from "../../assests/Worker.jpg";
import sale from "../../assests/sales.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation, useNavigate } from "react-router-dom";
import { applyForJobCall, getJobPostByIdCall } from "../../apis/job-posting/repo";
import { SUCCESS } from "../../utils/constants";
import { HiCurrencyDollar } from "react-icons/hi2";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { isInvalidEmail, isOnlyNumber } from "../../utils/validations";
import { isNullOrEmpty } from "../../utils/text-utils";

export default function ApplyDirectly() {
  const location = useLocation();
  const navigate = useNavigate();
  // const [fileAddress, setFileAddress] = useState("");

  const [state, setState] = useState({
    jobPostData: null,
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
    fileAddress: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    if (location.state) getJobData();
  }, [location.state]);

  function getJobData() {
    getJobPostByIdCall(location.state)
      .then(({ data }) => {
        if (data.error_code == SUCCESS)
          setState((prevState) => ({ ...prevState, jobPostData: data.result }));
        else setState((prevState) => ({ ...prevState, jobPostData: null }));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    if (file) {
      // setFileAddress(file.name);
      setState((prevState) => ({ ...prevState, file: file, fileAddress: file.name }));
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  function isViewValid() {
    if (!state.file) alert("Please upload your resume");
    else if (!state.name) alert("Please enter your name");
    else if (!state.email) alert("Please enter your email");
    else if (isInvalidEmail(state.email)) alert("Please enter valid email");
    else if (!state.phone) alert("Please enter your phone number");
    else if (!state.message) alert("Please enter your message");
    else return true;
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isViewValid()) {
      let formData = new FormData();
      formData.append("surname", state.name);
      formData.append("email", state.email);
      formData.append("phone", state.phone);
      formData.append("message", state.message);
      formData.append("resume", state.file);

      applyForJobCall(formData)
        .then(({ data }) => {
          debugger;
          if (data.error_code == SUCCESS) {
            setState((prevState) => ({
              ...prevState,
              fileAddress: "",
              name: "",
              email: "",
              phone: "",
              message: "",
            }));
            alert("Thank your applying for this job. We will update you soon.");
            navigate(-1);
          } else alert(data.message);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <div className="bg-[#212121] text-white">
      {/* <NavbarNext /> */}
      {/* <AboutUsNavbar blackColor={true} /> */}

      <div
        style={{ background: `url(${applyHeaderBg})` }}
        className="w-full h-[500px]  bg-cover bg-center"
      >
        <div className="w-full h-full  bg-black bg-opacity-70">
          <div className=" md:w-[90%] lg:w-4/5 px-5 md:px-0 md:ml-auto md:mr-auto flex flex-col md:flex-row md:justify-between md:items-center pt-28">
            <div className="md:w-3/4">
              <h1 className="text-xl md:text-4xl font-semibold text-white text-start leading-snug">
                {state.jobPostData?.job_title}
              </h1>
              <div className="flex justify-start items-center text-[10px] md:text-base gap-5 my-2 md:my-5">
                <div className="cursor-pointer flex justify-center items-center gap-2  bg-[#B8A147] px-2 md:px-5 pt-3 pb-3 text-white rounded-lg md:text-[10px] lg:text-base">
                  {" "}
                  <PiSuitcaseSimpleBold size={25} />
                  {state.jobPostData?.job_type}
                </div>
                <div className="cursor-pointer flex justify-center items-center gap-2  bg-[#B8A147] px-2 md:px-5 pt-3 pb-3 text-white rounded-lg md:text-[10px] lg:text-base">
                  {" "}
                  <FaMapMarkerAlt size={25} />
                  {state.jobPostData?.address}
                </div>
                <div className="cursor-pointer flex justify-center items-center gap-2  bg-[#B8A147] px-2 md:px-5 pt-3 pb-3 text-white rounded-lg md:text-[10px] lg:text-base">
                  {" "}
                  <IoMdClock size={25} />
                  {state.jobPostData?.experience}
                </div>
                <div className="cursor-pointer flex justify-center items-center gap-2  bg-[#B8A147] px-2 md:px-5 pt-3 pb-3 text-white rounded-lg md:text-[10px] lg:text-base">
                  {" "}
                  <HiCurrencyDollar size={25} />
                  {`${formatCurrency(
                    state.jobPostData?.min_salary ? state.jobPostData?.min_salary : 0
                  )} - ${formatCurrency(
                    state.jobPostData?.max_salary ? state.jobPostData?.max_salary : 0
                  )}`}
                </div>
              </div>
              <div className="flex justify-start items-center text-[10px] md:text-base gap-5 my-2 md:my-5">
                <div className="cursor-pointer flex justify-center items-center gap-2 bg-[#DAEDE4] px-2 md:px-5 py-1 rounded-3xl md:text-[10px] lg:text-base text-[#34A853]">
                  {state.jobPostData?.opening_no} Openings
                </div>
                <div className="cursor-pointer flex justify-center items-center gap-2 bg-[#DAEDE4] px-2 md:px-5 py-1  rounded-3xl md:text-[10px] lg:text-base text-[#34A853]">
                  {state.jobPostData?.priority}
                </div>
              </div>
            </div>

            <div data-aos="zoom-in-up" className="lg:w-2/5 relative">
              <div className="mt-5 md:mt-0 flex justify-start items-start gap-2 md:gap-9 w-full rounded-lg border border-white h-72 bg-custom-gradient-yellow pl-5 md:pl-10 pt-10">
                <div className="cursor-pointer flex justify-center items-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black text-xl  font-extrabold">
                  <FaPlus />
                </div>
                <div>
                  <h1 className="text-lg md:text-3xl font-bold text-white mb-2">Lorem, ipsum.</h1>
                  <p className="text-white text-[15px] md:text-base text-start">Deel jouw cv</p>
                </div>
              </div>

              <div className="bg-white px-8 py-6 rounded-lg w-[270px] md:w-[420px] absolute top-2/4 -left-4 md:-left-16">
                <div className="flex justify-between items-center gap-2 md:gap-7 ">
                  <div className="w-3/4 text-[10px] md:text-base text-gray-500 text-start">
                    Als je op verstuur klikt, ga je akkoord met de voorwaarden
                  </div>
                  <div className="cursor-pointer text-[10px] md:text-base bg-[#B8A147] px-4 md:px-4 pt-2 pb-2 rounded-lg text-white">
                    Verstuur
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-col-reverse md:flex-row gap-14 w-4/5 mx-auto mt-24 ">
        <div data-aos="zoom-in-right" className="md:w-2/3">
          <div className="flex justify-start items-center gap-5">
            <div className="hidden md:block w-8 rounded-lg md:h-8 bg-[#B8A147] transform rotate-45"></div>

            <h1 className="text-[#B8A147] font-bold text-lg md:text-2xl">More about the company</h1>
          </div>

          <p className="text-xs md:text-base text-start md:ml-[53px] mt-2 md:mt-5 mb-6">
            {state.jobPostData?.about_company}
          </p>
          <div className="flex justify-start items-center gap-5">
            <div className="hidden md:block w-8 rounded-lg md:h-8 bg-[#B8A147] transform rotate-45"></div>

            <h1 className="text-[#B8A147] font-bold text-lg md:text-2xl">Job Description</h1>
          </div>
          <p className="text-xs md:text-base text-start md:ml-[53px] mt-2 md:mt-5  mb-6">
            {state.jobPostData?.job_description}
          </p>
        </div>

        <div data-aos="zoom-in-left" className="min-w-[20%] bg-slate-600 p-2 rounded-2xl">
          <div className="flex justify-center items-center gap-2 mb-9">
            {/* <div className="text-[15px] md:text-base text-start">
              {state.jobPostData?.hiring_manager_name}
            </div> */}
            <img
              src={
                state.jobPostData?.manager_image
                  ? process.env.REACT_APP_URL.concat(state.jobPostData?.manager_image)
                  : applyProfile
              }
              style={{ width: "100px", height: "100px" }}
              className="rounded-full"
            />
          </div>

          <div className="flex justify-start items-center gap-2 md:gap-5 mb-2 md:mb-5">
            <FaUser fill="#B8A147" size={25} />
            <div>{state.jobPostData?.hiring_manager_name}</div>
          </div>
          <div className="flex justify-start items-center gap-2 md:gap-5 mb-2 md:mb-5">
            <MdEmail fill="#B8A147" size={25} />
            <div>{state.jobPostData?.manager_email}</div>
          </div>
          <div className="flex justify-start items-center gap-2 md:gap-5 mb-2 md:mb-5">
            <FaPhoneAlt fill="#B8A147" size={25} />
            <div>{state.jobPostData?.manager_phone}</div>
          </div>
          <div className="flex justify-start items-center gap-2 md:gap-5 mb-2 md:mb-5">
            <IoLogoWhatsapp fill="#B8A147" size={25} />
            <div>{state.jobPostData?.whatsapp_no}</div>
          </div>
          <div className="flex justify-start items-center gap-2 md:gap-5">
            <FaLinkedin fill="#B8A147" size={25} />
            <div>{state.jobPostData?.poster_linkedin}</div>
          </div>

          <div className="flex flex-col mt-6 items-start gap-4">
            <div className="text-lg font-bold">Job Overview:</div>

            <div className="flex flex-row items-center gap-5">
              <PiSuitcaseSimpleBold size={30} color="#B8A147" />
              <div className="flex flex-col items-start">
                <div className="text-base font-semibold">Job Type:</div>
                <div className="text-base font-normal">{state.jobPostData?.job_type}</div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-5">
              <IoMdClock size={30} color="#B8A147" />
              <div className="flex flex-col items-start">
                <div className="text-base font-semibold">Experience:</div>
                <div className="text-base font-normal">{state.jobPostData?.experience}</div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-5">
              <FaMapMarkerAlt size={30} color="#B8A147" />
              <div className="flex flex-col items-start">
                <div className="text-base font-semibold">Location:</div>
                <div className="text-base font-normal">{state.jobPostData?.address}</div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-5">
              <IoMdClock size={30} color="#B8A147" />
              <div className="flex flex-col items-start">
                <div className="text-base font-semibold">Working Hours:</div>
                <div className="text-base font-normal">{state.jobPostData?.working_hours}</div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-5">
              <HiCurrencyDollar size={30} color="#B8A147" />
              <div className="flex flex-col items-start">
                <div className="text-base font-semibold">Salary:</div>
                <div className="text-base font-normal">{`${formatCurrency(
                  state.jobPostData?.min_salary ? state.jobPostData?.min_salary : 0
                )} - ${formatCurrency(
                  state.jobPostData?.max_salary ? state.jobPostData?.max_salary : 0
                )}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative md:pl-40 -bottom-20 px-5 md:px-0">
        <div
          data-aos="fade-up"
          style={{
            borderImage: "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
          }}
          className="p-4 md:p-8 border rounded-lg bg-[#171717] md:w-[65%] flex flex-col justify-start"
        >
          <h1 className="text-white text-[15px] md:text-2xl font-bold text-start">
            Job Requirement
          </h1>
          <p className="text-white text-[10px] md:text-base text-start">
            {state.jobPostData?.job_requirement}
          </p>
        </div>
      </div>
      <div
        style={{ background: `url(${applyDirectlyBgImg})` }}
        className="w-full h-auto md:h-[800px]  bg-cover bg-center "
      >
        <div className="w-full h-auto md:h-full bg-[#B8A147] px-5 md:px-20 bg-opacity-70 flex flex-col md:flex-row justify-center items-center md:gap-20 md:pb-0 pb-10">
          <div data-aos="fade-right" className="md:w-1/2 text-start pt-[120px] md:pt-20">
            <p className="text-[13px] md:text-2xl">Apply now</p>
            <h1 className="text-[15px] md:text-4xl font-semibold py-1 md:py-3">
              {state.jobPostData?.job_title}
            </h1>
            <div className="flex">
              <div className="h-auto border-l"></div>
              <div className="text-[13px] md:text-lg font-semibold mt-5">
                <div className="flex items-center gap-2 pb-5">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40.5"
                      height="19"
                      viewBox="0 0 40.5 19"
                    >
                      <line
                        id="Line_8"
                        data-name="Line 8"
                        x2="23"
                        transform="translate(0 10.5)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      ></line>
                      <circle
                        id="Ellipse_10"
                        data-name="Ellipse 10"
                        cx="9.5"
                        cy="9.5"
                        r="9.5"
                        transform="translate(21.5)"
                        fill="#fff"
                      ></circle>
                    </svg>
                  </p>
                  <p className="">Your resume</p>
                </div>
                <div className="flex items-center gap-2 pb-5">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40.5"
                      height="19"
                      viewBox="0 0 40.5 19"
                    >
                      <line
                        id="Line_8"
                        data-name="Line 8"
                        x2="23"
                        transform="translate(0 10.5)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      ></line>
                      <circle
                        id="Ellipse_10"
                        data-name="Ellipse 10"
                        cx="9.5"
                        cy="9.5"
                        r="9.5"
                        transform="translate(21.5)"
                        fill="#fff"
                      ></circle>
                    </svg>
                  </p>
                  <p className="">Your ambitions</p>
                </div>
                <div className="flex items-center gap-2 pb-5">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40.5"
                      height="19"
                      viewBox="0 0 40.5 19"
                    >
                      <line
                        id="Line_8"
                        data-name="Line 8"
                        x2="23"
                        transform="translate(0 10.5)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      ></line>
                      <circle
                        id="Ellipse_10"
                        data-name="Ellipse 10"
                        cx="9.5"
                        cy="9.5"
                        r="9.5"
                        transform="translate(21.5)"
                        fill="#fff"
                      ></circle>
                    </svg>
                  </p>
                  <p className="">Your selection of conversations</p>
                </div>
                <div className="flex items-center gap-2 pb-5">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40.5"
                      height="19"
                      viewBox="0 0 40.5 19"
                    >
                      <line
                        id="Line_8"
                        data-name="Line 8"
                        x2="23"
                        transform="translate(0 10.5)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      ></line>
                      <circle
                        id="Ellipse_10"
                        data-name="Ellipse 10"
                        cx="9.5"
                        cy="9.5"
                        r="9.5"
                        transform="translate(21.5)"
                        fill="#fff"
                      ></circle>
                    </svg>
                  </p>
                  <p className="">Your job choice</p>
                </div>
              </div>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div
              data-aos="fade-left"
              className="md:w-auto flex flex-col mt-28 px-4 md:px-5 justify-center items-center bg-white rounded-lg"
            >
              <div className="flex w-56 md:w-80 justify-between py-5 md:py-10 items-center">
                <label
                  htmlFor="upload"
                  className="cursor-pointer flex bg-[#B8A147] justify-center items-center w-12 h-12 md:w-16 md:h-16 rounded-full text-black text-xl font-extrabold"
                  aria-label="Upload CV"
                >
                  <FaPlus color="white" />
                </label>
                <div className="text-[#B8A147] font-semibold text-[15px] md:text-2xl">
                  Upload Your CV
                </div>
                <input
                  id="upload"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  onClick={(e) => (e.target.value = null)}
                  required
                />
              </div>
              <input
                className="text-[12px] md:text-base py-2 px-5 w-52 md:w-72 lg:w-80 mb-5 text-gray-700 outline-none focus:outline-none bg-[#E3E3E3] rounded-lg"
                type="text"
                placeholder="Upload CV"
                onChange={handleInputChange}
                value={state.fileAddress}
                readOnly
                aria-label="File address"
                required
              />
              <input
                className="text-[12px] md:text-base py-2 px-5 w-52 md:w-72 lg:w-80 mb-5  text-gray-700 outline-none focus:outline-none bg-[#E3E3E3] rounded-lg"
                type="text"
                value={state.name}
                onChange={handleInputChange}
                placeholder="Surname"
                name="name"
                required
              />
              <input
                className="text-[12px] md:text-base py-2 px-5 w-52 md:w-72 lg:w-80 mb-5  text-gray-700 outline-none focus:outline-none bg-[#E3E3E3] rounded-lg"
                type="email"
                onChange={handleInputChange}
                placeholder="Email"
                value={state.email}
                name="email"
                id=""
                required
              />
              <input
                className="text-[12px] md:text-base py-2 px-5 w-52 md:w-72 lg:w-80 mb-5  text-gray-700 outline-none focus:outline-none bg-[#E3E3E3] rounded-lg"
                id=""
                name="phone"
                placeholder="Phone"
                type="tel"
                value={state.phone}
                onChange={(e) => {
                  if (isOnlyNumber(e.target.value) || isNullOrEmpty(e.target.value))
                    setState((prevState) => ({ ...prevState, phone: e.target.value }));
                }}
                required
              />
              <textarea
                style={{ resize: "none" }}
                className="text-[12px] md:text-base py-2 px-5 w-52 md:w-72 lg:w-80 mb-5  text-gray-700 outline-none focus:outline-none bg-[#E3E3E3] rounded-lg"
                value={state.message}
                onChange={handleInputChange}
                placeholder="Message"
                name="message"
                id=""
                required
              ></textarea>
              <button
                className="md:px-10  bg-[#B8A147] text-[10px] md:text-base w-20 md:w-32 py-2 rounded-lg"
                type="submit"
              >
                Submit
              </button>
              <div className="relative -bottom-4 bg-white flex border border-[#B8A147] rounded-lg p-1 px-2 justify-between items-center w-[80%]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.21"
                    height="16.28"
                    viewBox="0 0 12.21 16.28"
                  >
                    <path
                      id="padlock"
                      d="M13.684,6.1h-.509V4.07a4.07,4.07,0,0,0-8.14,0V6.1H4.526A1.528,1.528,0,0,0,3,7.631v7.122A1.528,1.528,0,0,0,4.526,16.28h9.157a1.528,1.528,0,0,0,1.526-1.526V7.631A1.528,1.528,0,0,0,13.684,6.1ZM6.392,4.07a2.713,2.713,0,1,1,5.427,0V6.1H6.392Zm3.392,7.273v1.545a.678.678,0,1,1-1.357,0V11.343a1.357,1.357,0,1,1,1.357,0Z"
                      transform="translate(-3)"
                      fill="#B8A147"
                    ></path>
                  </svg>
                </div>
                <div className="text-[#B8A147] text-[8px] md:text-sm">
                  We handle your data confidentially
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className="text-[13px] md:text-3xl w-full text-start p-10 pb-0">
          See all similar jobs
        </div>
        <div
          // data-aos="flip-up"
          className="flex justify-center  gap-12 p-10 flex-col md:flex-row"
        >
          <div className="md:w-[30%] flex justify-center">
            {" "}
            <Card bgImage={worker} heading={"Engineering"} />
          </div>
          <div className="md:w-[30%] flex justify-center">
            {" "}
            <Card bgImage={developer} heading={"Development"} />
          </div>
          <div className="md:w-[30%] flex justify-center">
            {" "}
            <Card bgImage={sale} heading={"Sales"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
