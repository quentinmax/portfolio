import React, { useRef, useState } from "react";
import transition from "../util/transition";
import Cursor from "../components/Cursor";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Cursor cursorRef={cursorRef} trailRef={trailRef} />
      hallo
      <StrikethroughText text={"hallo"} />
    </div>
  );
};

const StrikethroughText = ({ text }: { text: string }) => {
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const controls = useAnimation();

  const handleTextClick = async () => {
    await controls.start({
      opacity: isStrikethrough ? 0 : 1,
      x: isStrikethrough ? "100%" : 0,
    });
    setIsStrikethrough(!isStrikethrough);
  };

  return (
    <div>
      <motion.div
        onClick={handleTextClick}
        style={{ display: "inline-block", position: "relative" }}
      >
        <motion.span
          style={{
            textDecoration: isStrikethrough ? "line-through" : "none",
            display: "inline-block",
          }}
        >
          {text}
        </motion.span>
        <motion.div
          style={{
            position: "absolute",
            bottom: "50%",
            left: 0,
            width: "100%",
            height: 2,
            background: "black", // Customize the line color here
            originX: 0, // Anchor point
            opacity: 0.5,
          }}
          animate={controls}
        />
      </motion.div>
    </div>
  );
};

export default transition(About);
