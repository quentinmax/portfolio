import React, { useEffect, useRef, useState } from "react";
import "../styles/marquee.css";
import gsap from "gsap";

const MarqueeText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  //   const [xPercent, setXPecent] = useState(0);
  //   const [direction, setDirection] = useState(-1);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  console.log(xPercent);

  return (
    <div className="marquee-container">
      <div className="marquee">
        <p ref={firstText}>Full-Stack-Developer | </p>
        <p ref={secondText}>Full-Stack-Developer | </p>
      </div>
    </div>
  );
};

export default MarqueeText;
