import React from "react";
import "./Card.css";
export default function Card({ bgImage, heading, content }) {
  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(${
            typeof bgImage == "string" ? bgImage.replace("\\", "/") : bgImage
          })`,
        }}
        className="card border border-[#EDD569]"
      >
        <div className="overlay">
          <div className="text">
            <p
              className="pb-3 md:pb-1"
              style={{
                color: "orange",
                fontWeight: "600",
                fontSize: "18px",
                marginTop: "5px",
                marginBottom: "10px",
              }}
            >
              {" "}
              {heading}
            </p>
            <p className="text-xs lg:text-sm" style={{ textAlign: "start" }}>
              {content}
            </p>
            <p style={{ fontWeight: "600", cursor: "pointer" }}>Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
}
