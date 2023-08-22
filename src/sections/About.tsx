import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="project-container">
      <div className="header-container">
        <h4>About Me</h4>
      </div>
      <div className="about-content">
        {/* <p>
          Hey! I'm Quentin, a passionate self-taught Full-Stack-Dev based in
          Germany. I love creating new things from scratch
        </p> */}
        <p>
          Hi! I'm Quentin, a passionate 17-year-old full-stack developer based
          in Germany. I love crafting user-friendly front-end interfaces that
          leave a lasting impression and constructing robust back-end systems
          that power these creations. With a strong foundation in a variety of
          programming languages and frameworks, I'm always eager to push the
          boundaries of what's possible and continuously honing my skills.
        </p>
      </div>
    </div>
  );
};

export default About;
