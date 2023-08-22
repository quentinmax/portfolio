import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "../components/AnimatedText";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const offsetXTop = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const offsetXBottom = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div className="container">
      <div className="banner-container">
        <motion.div
          style={{
            translateX: offsetXBottom,
          }}
          className="introduction"
        >
          <AnimatedText
            textClassName="name"
            bannerClassName="introduction-banner"
            title="Hi,&nbsp; I'm&nbsp; Quentin"
          />
        </motion.div>
        <motion.div
          style={{
            translateX: offsetXTop,
          }}
        >
          <AnimatedText title="Mobile- &nbsp;&" banner={true} />
        </motion.div>
        <motion.div
          style={{
            translateX: offsetXBottom,
          }}
        >
          <AnimatedText title="Web-Developer" banner={true} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
