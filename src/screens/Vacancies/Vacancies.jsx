import React from "react";
import Section_1 from "../../components/Vacancies/Section_1";
import Main from "../../components/Vacancies/Main";
import Apply from "../../components/Vacancies/Apply";
import Footer from "../../components/Footer";

export default function Vacancies() {
  return (
    <div className="bg-[#212121]">
      {/* <Main /> */}
      <Section_1 />
      <Apply />
      <Footer />
    </div>
  );
}
