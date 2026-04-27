import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NumberAnimation from "./NumberAnimation";

export default function Impact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);

  // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with class 'count-up'
    var countUpElements = document.querySelectorAll(".count-up");

    // Loop through each count-up element
    countUpElements.forEach(function (element) {
      // Get the start and end values from data attributes
      var start = parseInt(element.getAttribute("data-start"));
      var end = parseInt(element.getAttribute("data-end"));
      var duration = 2000; // Animation duration in milliseconds
      var range = end - start; // Calculate the range of values
      var interval = 15; // Interval time between updates in milliseconds
      var step = Math.ceil(duration / interval); // Calculate number of steps

      // Calculate increment value for each step
      var increment = range / step;

      // Initialize the current value as the start value
      var current = start;

      // Function to update the element's text content
      function updateCount() {
        // Update the element's text content with the current value
        element.textContent = Math.ceil(current);

        // Check if we've reached the end value
        if (current >= end) {
          // Stop the interval timer
          clearInterval(timer);
          // Ensure the final value is displayed
          element.textContent = end;
        } else {
          // Increment the current value
          current += increment;
        }
      }

      // Call the updateCount function at regular intervals
      var timer = setInterval(updateCount, interval);
    });
  });
  return (
    <div className="impactMain" id="industries">
      <div data-aos="fade-up" className="impactMainInner">
        <h1 className="impactMainHead">
          Our <span style={{ backgroundColor: "black" }}>Impact</span> in
          Numbers
        </h1>
        <p className="impactMainPara">
          Our outsourcing and manpower solutions have helped businesses in a
          wide range of industries to save time and money while reducing
          compliance risks.
        </p>
      </div>

      <div data-aos="fade-up" className="impactMainContainer">
        <div className="impactMainChild">
          <h1 className="impactMainContainerHead">
            <NumberAnimation start={0} end={30} duration={1000} />
          </h1>
          <p className="impactMainContainerPara">Industries</p>
        </div>
        <div className="impactMainChild">
          <h1 className="impactMainContainerHead">
            {" "}
            <NumberAnimation start={0} end={5000} duration={1000} />
          </h1>
          <p className="impactMainContainerPara">Pool</p>
        </div>
        <div className="impactMainChild">
          <h1 className="impactMainContainerHead">
            {" "}
            <NumberAnimation start={0} end={50} duration={1000} />
          </h1>
          <p className="impactMainContainerPara">Partnerships</p>
        </div>
        <div className="impactMainChild">
          <h1 className="impactMainContainerHead">
            {" "}
            <NumberAnimation start={0} end={10} duration={1000} />
          </h1>
          <p className="impactMainContainerPara">Experience</p>
        </div>
      </div>
    </div>
  );
}
