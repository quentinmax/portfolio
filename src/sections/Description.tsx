import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

const Description = () => {
  const descritionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const text = new SplitType(descritionRef.current!, {
      types: "chars,words",
    });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: descritionRef.current,
        start: "top 90%",
        end: "top 10%",
        scrub: true,
      },
      smoothOrigin: true,
      opacity: 0.2,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="description-container">
      <h1 ref={descritionRef} className="description-heading">
        I bring a blend of creativity and technical expertise to every project,
        delivering robust web applications that make a difference.
      </h1>
    </div>
  );
};

export default Description;
