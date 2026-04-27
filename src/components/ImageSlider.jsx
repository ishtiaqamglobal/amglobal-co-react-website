// import "./AdvisoryBoard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules"; // Removed Navigation import
import "swiper/css";
import "swiper/css/pagination";
import amazon from "../assests/amazon-png-logo.png";
import dubaiworldtradecentre from "../assests/dubai_world_trade_centre.png";
import noonlogo from "../assests/noon_logo.png";
import CEVALogisticsLogo from "../assests/CEVA_Logistics_New_Logo.png";
import alrostamanigroup from "../assests/al_rostamani_group.png";
import ministryofpresidentialaffairs from "../assests/ministry-of-presidential-affairs.png";
import altayergrouplogo from "../assests/al_tayer_group_logo.png";

export default function ImageSlider() {
  let data = [
    {
      id: 1,
      image: amazon,
    },
    {
      id: 2,
      image: dubaiworldtradecentre,
    },
    {
      id: 3,
      image: noonlogo,
    },
    {
      id: 4,
      image: CEVALogisticsLogo,
    },
    {
      id: 5,
      image: alrostamanigroup,
    },
    {
      id: 6,
      image: ministryofpresidentialaffairs,
    },
    {
      id: 7,
      image: altayergrouplogo,
    },
  ];

  return (
    <>
      <div className="advisoryboard_box pb-10">
        <h1 className="text-center text-4xl font-medium mt-3 mb-8">
          Our Clients
        </h1>

        <Swiper
          modules={[Pagination, Autoplay]} // Removed Navigation module
          loop={true}
          spaceBetween={5}
          slidesPerView={5}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {data.map((member) => (
            <SwiperSlide key={member.id} className="advisory-swiper-card">
              <div
                className="advisoryboard_infocard"
                style={{ width: "100% !important" }}
              >
                <img
                  className="slider_img"
                  src={member.image}
                  alt={member.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons (Removed) */}
        {/* <div className="swiper-button-next custom-swiper-button"></div>
        <div className="swiper-button-prev custom-swiper-button"></div> */}
      </div>
    </>
  );
}
