import React, { useEffect, useState } from "react";
import AnimatedText from "./AnimatedText";
import {
  AnimatePresence,
  VariantLabels,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface Props {
  menuVisible: boolean;
  title: string;
}

const MenuItem: React.FC<Props> = ({ menuVisible, title }) => {
  const overlayScaleX = useSpring(0, { bounce: 0, duration: 1000 });
  const underlayScaleX = useSpring(0, { bounce: 0, duration: 800 });
  const transformOrigin = useMotionValue<string>("left");

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(mediaQuery.matches);
  }, []);

  const hoverStart = () => {
    if (isTouchDevice) return;
    transformOrigin.set("left");
    underlayScaleX.set(1);
    overlayScaleX.set(1);
  };
  const hoverEnd = () => {
    transformOrigin.set("right");
    underlayScaleX.set(0);
    overlayScaleX.set(0);
  };

  return (
    <motion.div
      onHoverStart={hoverStart}
      onHoverEnd={hoverEnd}
      style={{ position: "relative" }}
    >
      <motion.div
        style={{
          scaleX: underlayScaleX,
          transformOrigin,
        }}
        className="strikethrough"
      />
      <motion.div
        style={{ scaleX: overlayScaleX, transformOrigin }}
        className="strikethrough"
      />
      <AnimatePresence>
        {menuVisible && <AnimatedText title={title} delay={0.1} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default MenuItem;
