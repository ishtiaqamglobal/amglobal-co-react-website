import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Outsourcing from "../components/Outsourcing";
import ChooseUs from "../components/ChooseUs";
import Impact from "../components/Impact";
import Footer from "../components/Footer";
import ServicesUpdate from "../components/ServicesUpdate";
import ImageSlider from "../components/ImageSlider";
import ContactUs from "../components/ContactUS/ContactUs";

export default function MainScreen() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <ImageSlider /> */}
      <Outsourcing />
      <ServicesUpdate />
      <ChooseUs />
      <Impact />
      <ContactUs />
      <Footer />
    </div>
  );
}
