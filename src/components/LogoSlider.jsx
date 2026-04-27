// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// import "swiper/swiper-bundle.min.css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

// const logos = [
//   { src: "path/to/rta-logo.png", alt: "RTA" },
//   { src: "path/to/msc-logo.png", alt: "MSC Cruises" },
//   { src: "path/to/mcdermott-logo.png", alt: "McDermott" },
//   { src: "path/to/qatar-airways-logo.png", alt: "Qatar Airways" },
//   { src: "path/to/kaykroo-logo.png", alt: "Kaykroo" },
// ];

// const LogoSlider = () => {
//   return (
//     <div className="logo-slider-wrapper">
//       <h2>Our Clients</h2>
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={5}
//         loop={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         navigation={true}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           0: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           480: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 40,
//           },
//         }}
//         className="mySwiper"
//       >
//         {logos.map((logo, index) => (
//           <SwiperSlide key={index}>
//             <div className="logo-slide">
//               <img src={logo.src} alt={logo.alt} className="logo-image" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default LogoSlider;
