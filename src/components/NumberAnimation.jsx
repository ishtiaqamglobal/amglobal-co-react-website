import React, { useState, useEffect, useRef } from "react";

const NumberAnimation = ({ start, end, duration }) => {
  const [currentNumber, setCurrentNumber] = useState(start);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const startTime = Date.now();
        const endTime = startTime + duration;
        const difference = end - start;

        const updateNumber = () => {
          const now = Date.now();
          const remainingTime = Math.max(0, endTime - now);
          const percentage = 1 - remainingTime / duration;
          const newNumber = Math.floor(start + percentage * difference);
          setCurrentNumber(newNumber);

          if (now < endTime) {
            requestAnimationFrame(updateNumber);
          }
        };

        updateNumber();
      }
    });

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [start, end, duration]);

  return <div ref={sectionRef}>{currentNumber}+</div>;
};

export default NumberAnimation;
